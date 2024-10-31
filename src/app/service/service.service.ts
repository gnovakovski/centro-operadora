import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Mantenha apenas essa importação
import { from, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmailAuthProvider } from 'firebase/auth'; // Usado para criar as credenciais de email e senha


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient, private afAuth: AngularFireAuth, private firestore: AngularFirestore, private fireStorage: AngularFireStorage) { }

  login(email: string, password: string): Observable<any> {
    return from(this.afAuth.signInWithEmailAndPassword(email, password));  // Converte Promise para Observable
  }

  logout(): Promise<void> {
    return this.afAuth.signOut();
  }

  getCollectionData(collectionName: string): Observable<any[]> {
    return this.firestore.collection(collectionName).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getImageUrl(imageName: string): Observable<string> {
    const imageRef = this.fireStorage.ref(imageName);
    return imageRef.getDownloadURL();
  }

  post(viagem: any, collection: any): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection(collection).doc(id).set(viagem);
  }

  // Método para fazer o upload da imagem
  uploadImage(file: File, fileName: string): Observable<string> {
    const filePath = fileName; // Caminho e nome do arquivo
    const fileRef = this.fireStorage.ref(filePath);
    const task = this.fireStorage.upload(filePath, file);

    return new Observable<string>((observer) => {
      // Monitorar o progresso do upload e obter o URL de download
      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            observer.next(url); // Retorna a URL de download
            observer.complete();
          });
        })
      ).subscribe();
    });
  }

  getById(id: string, collection: any): Observable<any> {
    return this.firestore.collection(collection).doc(id).valueChanges();
  }

  update(id: string, viagemData: any, collection: any): Promise<void> {
    return this.firestore.collection(collection).doc(id).update(viagemData);
  }

  removerFoto(nomeArquivo: string): Promise<void> {
    const fileRef = this.fireStorage.ref(nomeArquivo);
    return fileRef.delete().toPromise();
  }

  delete(id: string, collection: any): Promise<void> {
    return this.firestore.collection(collection).doc(id).delete();
  }

  getCep(cep: any): Observable<any> {
    return this.http.get<any>(`https://viacep.com.br/ws/${cep}/json/`)
  }

  registerWithEmail(email: string, password: string): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log('Usuário registrado com sucesso:', result);
        return result;
      })
      .catch((error) => {
        console.error('Erro ao registrar o usuário:', error);
        throw error;
      });
  }

  getEmailByUser(user: string): Observable<{ email: string; nivel_acesso: string } | null> {
    return this.firestore
      .collection("usuarios", ref => ref.where('usuario', '==', user))
      .snapshotChanges()
      .pipe(
        map(actions => {
          if (actions.length > 0) {
            const data = actions[0].payload.doc.data() as any;
            return {
              email: data.email,
              nivel_acesso: data.nivel_acesso || "",
            };
          } else {
            return null;
          }
        })
      );
  }

  getRolesByName(name: string): Observable<string | null> {
    return this.firestore
      .collection("niveis-acesso", ref => ref.where('nome', '==', name))
      .snapshotChanges()
      .pipe(
        map(actions => {
          if (actions.length > 0) {
            const data = actions[0].payload.doc.data() as any;
            return data.edicao_visualizacao;
          } else {
            return null;
          }
        })
      );
  }

  getViagemPorTipoNegocio(tipoNegocio: string): Observable<any[]> {
    return this.firestore
      .collection('viagens', ref => ref.where('tipo_negocio', '==', tipoNegocio))
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as any;
            const id = a.payload.doc.id;
            return { id, ...data }; // Retorna o ID junto com os dados
          })
        )
      );
  }

  changePassword(newPassword: string, currentPassword: string) {
    const user = this.afAuth.currentUser;

    return user.then(currentUser => {
      if (currentUser && currentUser.email) {
        // Primeiro, reautenticar o usuário
        const credentials = EmailAuthProvider.credential(currentUser.email, currentPassword);

        return currentUser.reauthenticateWithCredential(credentials)
          .then(() => {
            // Se a reautenticação for bem-sucedida, alterar a senha
            return currentUser.updatePassword(newPassword)
              .then(() => {
                console.log('Senha alterada com sucesso!');
                return true; // Retorna true quando a senha for alterada com sucesso
              })
              .catch((error) => {
                console.error('Erro ao alterar senha:', error);
                return false; // Retorna false em caso de erro
              });
          })
          .catch((error) => {
            console.error('Erro ao reautenticar o usuário:', error);
            return false; // Retorna false se a reautenticação falhar
          });
      } else {
        console.error('Usuário não autenticado.');
        return Promise.resolve(false); // Retorna uma Promise resolvida com false se o usuário não estiver logado
      }
    });
  }


}
