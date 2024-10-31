import {
  FormGroupDirective,
  FormsModule,
  NgControl,
  NgForm,
  ReactiveFormsModule
} from "./chunk-3Q7WXM2D.js";
import {
  CommonModule,
  DOCUMENT,
  Location,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-6KZCR2H6.js";
import {
  ANIMATION_MODULE_TYPE,
  ApplicationRef,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver$1,
  Directive,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  InputFlags,
  IterableDiffers,
  NgModule,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  Self,
  SkipSelf,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation$1,
  afterNextRender,
  afterRender,
  booleanAttribute,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  untracked,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-QZNT6SYG.js";
import "./chunk-BMOTH7VT.js";
import {
  animationFrameScheduler,
  asapScheduler,
  fromEvent,
  isObservable,
  merge
} from "./chunk-R2XRTZD4.js";
import {
  ConnectableObservable,
  Observable,
  Subject,
  Subscription,
  auditTime,
  distinctUntilChanged,
  filter,
  map,
  mergeMap,
  of,
  pairwise,
  shareReplay,
  startWith,
  switchMap,
  takeUntil,
  takeWhile,
  tap,
  throttleTime
} from "./chunk-ZOBMHJGX.js";
import "./chunk-EDEUTANG.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-Y6Q6HMFU.js";

// node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceNumberProperty(value, fallbackValue = 0) {
  if (_isNumberValue(value)) {
    return Number(value);
  }
  return arguments.length === 2 ? fallbackValue : 0;
}
function _isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}
function coerceCssPixelValue(value) {
  if (value == null) {
    return "";
  }
  return typeof value === "string" ? value : `${value}px`;
}
function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

// node_modules/@angular/cdk/fesm2022/platform.mjs
var hasV8BreakIterator;
try {
  hasV8BreakIterator = typeof Intl !== "undefined" && Intl.v8BreakIterator;
} catch {
  hasV8BreakIterator = false;
}
var Platform = class _Platform {
  constructor(_platformId) {
    this._platformId = _platformId;
    this.isBrowser = this._platformId ? isPlatformBrowser(this._platformId) : typeof document === "object" && !!document;
    this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
    this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
    this.BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== "undefined" && !this.EDGE && !this.TRIDENT;
    this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
    this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
    this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
    this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
    this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
  }
  static {
    this.ɵfac = function Platform_Factory(t) {
      return new (t || _Platform)(ɵɵinject(PLATFORM_ID));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _Platform,
      factory: _Platform.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Platform, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var PlatformModule = class _PlatformModule {
  static {
    this.ɵfac = function PlatformModule_Factory(t) {
      return new (t || _PlatformModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PlatformModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlatformModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var RtlScrollAxisType;
(function(RtlScrollAxisType2) {
  RtlScrollAxisType2[RtlScrollAxisType2["NORMAL"] = 0] = "NORMAL";
  RtlScrollAxisType2[RtlScrollAxisType2["NEGATED"] = 1] = "NEGATED";
  RtlScrollAxisType2[RtlScrollAxisType2["INVERTED"] = 2] = "INVERTED";
})(RtlScrollAxisType || (RtlScrollAxisType = {}));
var rtlScrollAxisType;
var scrollBehaviorSupported;
function supportsScrollBehavior() {
  if (scrollBehaviorSupported == null) {
    if (typeof document !== "object" || !document || typeof Element !== "function" || !Element) {
      scrollBehaviorSupported = false;
      return scrollBehaviorSupported;
    }
    if ("scrollBehavior" in document.documentElement.style) {
      scrollBehaviorSupported = true;
    } else {
      const scrollToFunction = Element.prototype.scrollTo;
      if (scrollToFunction) {
        scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
      } else {
        scrollBehaviorSupported = false;
      }
    }
  }
  return scrollBehaviorSupported;
}
function getRtlScrollAxisType() {
  if (typeof document !== "object" || !document) {
    return RtlScrollAxisType.NORMAL;
  }
  if (rtlScrollAxisType == null) {
    const scrollContainer = document.createElement("div");
    const containerStyle = scrollContainer.style;
    scrollContainer.dir = "rtl";
    containerStyle.width = "1px";
    containerStyle.overflow = "auto";
    containerStyle.visibility = "hidden";
    containerStyle.pointerEvents = "none";
    containerStyle.position = "absolute";
    const content = document.createElement("div");
    const contentStyle = content.style;
    contentStyle.width = "2px";
    contentStyle.height = "1px";
    scrollContainer.appendChild(content);
    document.body.appendChild(scrollContainer);
    rtlScrollAxisType = RtlScrollAxisType.NORMAL;
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
    }
    scrollContainer.remove();
  }
  return rtlScrollAxisType;
}
function _getEventTarget(event) {
  return event.composedPath ? event.composedPath()[0] : event.target;
}
function _isTestEnvironment() {
  return (
    // @ts-ignore
    typeof __karma__ !== "undefined" && !!__karma__ || // @ts-ignore
    typeof jasmine !== "undefined" && !!jasmine || // @ts-ignore
    typeof jest !== "undefined" && !!jest || // @ts-ignore
    typeof Mocha !== "undefined" && !!Mocha
  );
}

// node_modules/@angular/cdk/fesm2022/bidi.mjs
var DIR_DOCUMENT = new InjectionToken("cdk-dir-doc", {
  providedIn: "root",
  factory: DIR_DOCUMENT_FACTORY
});
function DIR_DOCUMENT_FACTORY() {
  return inject(DOCUMENT);
}
var RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || "";
  if (value === "auto" && typeof navigator !== "undefined" && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? "rtl" : "ltr";
  }
  return value === "rtl" ? "rtl" : "ltr";
}
var Directionality = class _Directionality {
  constructor(_document) {
    this.value = "ltr";
    this.change = new EventEmitter();
    if (_document) {
      const bodyDir = _document.body ? _document.body.dir : null;
      const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
      this.value = _resolveDirectionality(bodyDir || htmlDir || "ltr");
    }
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static {
    this.ɵfac = function Directionality_Factory(t) {
      return new (t || _Directionality)(ɵɵinject(DIR_DOCUMENT, 8));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _Directionality,
      factory: _Directionality.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Directionality, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DIR_DOCUMENT]
    }]
  }], null);
})();
var Dir = class _Dir {
  constructor() {
    this._dir = "ltr";
    this._isInitialized = false;
    this.change = new EventEmitter();
  }
  /** @docs-private */
  get dir() {
    return this._dir;
  }
  set dir(value) {
    const previousValue = this._dir;
    this._dir = _resolveDirectionality(value);
    this._rawDir = value;
    if (previousValue !== this._dir && this._isInitialized) {
      this.change.emit(this._dir);
    }
  }
  /** Current layout direction of the element. */
  get value() {
    return this.dir;
  }
  /** Initialize once default value has been set. */
  ngAfterContentInit() {
    this._isInitialized = true;
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static {
    this.ɵfac = function Dir_Factory(t) {
      return new (t || _Dir)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _Dir,
      selectors: [["", "dir", ""]],
      hostVars: 1,
      hostBindings: function Dir_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("dir", ctx._rawDir);
        }
      },
      inputs: {
        dir: "dir"
      },
      outputs: {
        change: "dirChange"
      },
      exportAs: ["dir"],
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: Directionality,
        useExisting: _Dir
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dir, [{
    type: Directive,
    args: [{
      selector: "[dir]",
      providers: [{
        provide: Directionality,
        useExisting: Dir
      }],
      host: {
        "[attr.dir]": "_rawDir"
      },
      exportAs: "dir",
      standalone: true
    }]
  }], null, {
    change: [{
      type: Output,
      args: ["dirChange"]
    }],
    dir: [{
      type: Input
    }]
  });
})();
var BidiModule = class _BidiModule {
  static {
    this.ɵfac = function BidiModule_Factory(t) {
      return new (t || _BidiModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _BidiModule,
      imports: [Dir],
      exports: [Dir]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BidiModule, [{
    type: NgModule,
    args: [{
      imports: [Dir],
      exports: [Dir]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/collections.mjs
var DataSource = class {
};
function isDataSource(value) {
  return value && typeof value.connect === "function" && !(value instanceof ConnectableObservable);
}
var ArrayDataSource = class extends DataSource {
  constructor(_data) {
    super();
    this._data = _data;
  }
  connect() {
    return isObservable(this._data) ? this._data : of(this._data);
  }
  disconnect() {
  }
};
var _ViewRepeaterOperation;
(function(_ViewRepeaterOperation2) {
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["REPLACED"] = 0] = "REPLACED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["INSERTED"] = 1] = "INSERTED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["MOVED"] = 2] = "MOVED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["REMOVED"] = 3] = "REMOVED";
})(_ViewRepeaterOperation || (_ViewRepeaterOperation = {}));
var _VIEW_REPEATER_STRATEGY = new InjectionToken("_ViewRepeater");
var _RecycleViewRepeaterStrategy = class {
  constructor() {
    this.viewCacheSize = 20;
    this._viewCache = [];
  }
  /** Apply changes to the DOM. */
  applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
    changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
      let view;
      let operation;
      if (record.previousIndex == null) {
        const viewArgsFactory = () => itemContextFactory(record, adjustedPreviousIndex, currentIndex);
        view = this._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = view ? _ViewRepeaterOperation.INSERTED : _ViewRepeaterOperation.REPLACED;
      } else if (currentIndex == null) {
        this._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);
        operation = _ViewRepeaterOperation.REMOVED;
      } else {
        view = this._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = _ViewRepeaterOperation.MOVED;
      }
      if (itemViewChanged) {
        itemViewChanged({
          context: view?.context,
          operation,
          record
        });
      }
    });
  }
  detach() {
    for (const view of this._viewCache) {
      view.destroy();
    }
    this._viewCache = [];
  }
  /**
   * Inserts a view for a new item, either from the cache or by creating a new
   * one. Returns `undefined` if the item was inserted into a cached view.
   */
  _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
    const cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);
    if (cachedView) {
      cachedView.context.$implicit = value;
      return void 0;
    }
    const viewArgs = viewArgsFactory();
    return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
  }
  /** Detaches the view at the given index and inserts into the view cache. */
  _detachAndCacheView(index, viewContainerRef) {
    const detachedView = viewContainerRef.detach(index);
    this._maybeCacheView(detachedView, viewContainerRef);
  }
  /** Moves view at the previous index to the current index. */
  _moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
    const view = viewContainerRef.get(adjustedPreviousIndex);
    viewContainerRef.move(view, currentIndex);
    view.context.$implicit = value;
    return view;
  }
  /**
   * Cache the given detached view. If the cache is full, the view will be
   * destroyed.
   */
  _maybeCacheView(view, viewContainerRef) {
    if (this._viewCache.length < this.viewCacheSize) {
      this._viewCache.push(view);
    } else {
      const index = viewContainerRef.indexOf(view);
      if (index === -1) {
        view.destroy();
      } else {
        viewContainerRef.remove(index);
      }
    }
  }
  /** Inserts a recycled view from the cache at the given index. */
  _insertViewFromCache(index, viewContainerRef) {
    const cachedView = this._viewCache.pop();
    if (cachedView) {
      viewContainerRef.insert(cachedView, index);
    }
    return cachedView || null;
  }
};
var UniqueSelectionDispatcher = class _UniqueSelectionDispatcher {
  constructor() {
    this._listeners = [];
  }
  /**
   * Notify other items that selection for the given name has been set.
   * @param id ID of the item.
   * @param name Name of the item.
   */
  notify(id, name) {
    for (let listener of this._listeners) {
      listener(id, name);
    }
  }
  /**
   * Listen for future changes to item selection.
   * @return Function used to deregister listener
   */
  listen(listener) {
    this._listeners.push(listener);
    return () => {
      this._listeners = this._listeners.filter((registered) => {
        return listener !== registered;
      });
    };
  }
  ngOnDestroy() {
    this._listeners = [];
  }
  static {
    this.ɵfac = function UniqueSelectionDispatcher_Factory(t) {
      return new (t || _UniqueSelectionDispatcher)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UniqueSelectionDispatcher,
      factory: _UniqueSelectionDispatcher.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UniqueSelectionDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/scrolling.mjs
var _c0 = ["contentWrapper"];
var _c1 = ["*"];
var VIRTUAL_SCROLL_STRATEGY = new InjectionToken("VIRTUAL_SCROLL_STRATEGY");
var FixedSizeVirtualScrollStrategy = class {
  /**
   * @param itemSize The size of the items in the virtually scrolling list.
   * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   */
  constructor(itemSize, minBufferPx, maxBufferPx) {
    this._scrolledIndexChange = new Subject();
    this.scrolledIndexChange = this._scrolledIndexChange.pipe(distinctUntilChanged());
    this._viewport = null;
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
  }
  /**
   * Attaches this scroll strategy to a viewport.
   * @param viewport The viewport to attach this strategy to.
   */
  attach(viewport) {
    this._viewport = viewport;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** Detaches this scroll strategy from the currently attached viewport. */
  detach() {
    this._scrolledIndexChange.complete();
    this._viewport = null;
  }
  /**
   * Update the item size and buffer size.
   * @param itemSize The size of the items in the virtually scrolling list.
   * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   */
  updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
    if (maxBufferPx < minBufferPx && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx");
    }
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onContentScrolled() {
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onDataLengthChanged() {
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onContentRendered() {
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onRenderedOffsetChanged() {
  }
  /**
   * Scroll to the offset for the given index.
   * @param index The index of the element to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling.
   */
  scrollToIndex(index, behavior) {
    if (this._viewport) {
      this._viewport.scrollToOffset(index * this._itemSize, behavior);
    }
  }
  /** Update the viewport's total content size. */
  _updateTotalContentSize() {
    if (!this._viewport) {
      return;
    }
    this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
  }
  /** Update the viewport's rendered range. */
  _updateRenderedRange() {
    if (!this._viewport) {
      return;
    }
    const renderedRange = this._viewport.getRenderedRange();
    const newRange = {
      start: renderedRange.start,
      end: renderedRange.end
    };
    const viewportSize = this._viewport.getViewportSize();
    const dataLength = this._viewport.getDataLength();
    let scrollOffset = this._viewport.measureScrollOffset();
    let firstVisibleIndex = this._itemSize > 0 ? scrollOffset / this._itemSize : 0;
    if (newRange.end > dataLength) {
      const maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
      const newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems));
      if (firstVisibleIndex != newVisibleIndex) {
        firstVisibleIndex = newVisibleIndex;
        scrollOffset = newVisibleIndex * this._itemSize;
        newRange.start = Math.floor(firstVisibleIndex);
      }
      newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
    }
    const startBuffer = scrollOffset - newRange.start * this._itemSize;
    if (startBuffer < this._minBufferPx && newRange.start != 0) {
      const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
      newRange.start = Math.max(0, newRange.start - expandStart);
      newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
    } else {
      const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
      if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
        const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
        if (expandEnd > 0) {
          newRange.end = Math.min(dataLength, newRange.end + expandEnd);
          newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
        }
      }
    }
    this._viewport.setRenderedRange(newRange);
    this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);
    this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
  }
};
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
  return fixedSizeDir._scrollStrategy;
}
var CdkFixedSizeVirtualScroll = class _CdkFixedSizeVirtualScroll {
  constructor() {
    this._itemSize = 20;
    this._minBufferPx = 100;
    this._maxBufferPx = 200;
    this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
  }
  /** The size of the items in the list (in pixels). */
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(value) {
    this._itemSize = coerceNumberProperty(value);
  }
  /**
   * The minimum amount of buffer rendered beyond the viewport (in pixels).
   * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
   */
  get minBufferPx() {
    return this._minBufferPx;
  }
  set minBufferPx(value) {
    this._minBufferPx = coerceNumberProperty(value);
  }
  /**
   * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
   */
  get maxBufferPx() {
    return this._maxBufferPx;
  }
  set maxBufferPx(value) {
    this._maxBufferPx = coerceNumberProperty(value);
  }
  ngOnChanges() {
    this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
  }
  static {
    this.ɵfac = function CdkFixedSizeVirtualScroll_Factory(t) {
      return new (t || _CdkFixedSizeVirtualScroll)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CdkFixedSizeVirtualScroll,
      selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
      inputs: {
        itemSize: "itemSize",
        minBufferPx: "minBufferPx",
        maxBufferPx: "maxBufferPx"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [forwardRef(() => _CdkFixedSizeVirtualScroll)]
      }]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFixedSizeVirtualScroll, [{
    type: Directive,
    args: [{
      selector: "cdk-virtual-scroll-viewport[itemSize]",
      standalone: true,
      providers: [{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [forwardRef(() => CdkFixedSizeVirtualScroll)]
      }]
    }]
  }], null, {
    itemSize: [{
      type: Input
    }],
    minBufferPx: [{
      type: Input
    }],
    maxBufferPx: [{
      type: Input
    }]
  });
})();
var DEFAULT_SCROLL_TIME = 20;
var ScrollDispatcher = class _ScrollDispatcher {
  constructor(_ngZone, _platform, document2) {
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._scrolled = new Subject();
    this._globalSubscription = null;
    this._scrolledCount = 0;
    this.scrollContainers = /* @__PURE__ */ new Map();
    this._document = document2;
  }
  /**
   * Registers a scrollable instance with the service and listens for its scrolled events. When the
   * scrollable is scrolled, the service emits the event to its scrolled observable.
   * @param scrollable Scrollable instance to be registered.
   */
  register(scrollable) {
    if (!this.scrollContainers.has(scrollable)) {
      this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(() => this._scrolled.next(scrollable)));
    }
  }
  /**
   * De-registers a Scrollable reference and unsubscribes from its scroll event observable.
   * @param scrollable Scrollable instance to be deregistered.
   */
  deregister(scrollable) {
    const scrollableReference = this.scrollContainers.get(scrollable);
    if (scrollableReference) {
      scrollableReference.unsubscribe();
      this.scrollContainers.delete(scrollable);
    }
  }
  /**
   * Returns an observable that emits an event whenever any of the registered Scrollable
   * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
   * to override the default "throttle" time.
   *
   * **Note:** in order to avoid hitting change detection for every scroll event,
   * all of the events emitted from this stream will be run outside the Angular zone.
   * If you need to update any data bindings as a result of a scroll event, you have
   * to run the callback using `NgZone.run`.
   */
  scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
    if (!this._platform.isBrowser) {
      return of();
    }
    return new Observable((observer) => {
      if (!this._globalSubscription) {
        this._addGlobalListener();
      }
      const subscription = auditTimeInMs > 0 ? this._scrolled.pipe(auditTime(auditTimeInMs)).subscribe(observer) : this._scrolled.subscribe(observer);
      this._scrolledCount++;
      return () => {
        subscription.unsubscribe();
        this._scrolledCount--;
        if (!this._scrolledCount) {
          this._removeGlobalListener();
        }
      };
    });
  }
  ngOnDestroy() {
    this._removeGlobalListener();
    this.scrollContainers.forEach((_, container) => this.deregister(container));
    this._scrolled.complete();
  }
  /**
   * Returns an observable that emits whenever any of the
   * scrollable ancestors of an element are scrolled.
   * @param elementOrElementRef Element whose ancestors to listen for.
   * @param auditTimeInMs Time to throttle the scroll events.
   */
  ancestorScrolled(elementOrElementRef, auditTimeInMs) {
    const ancestors = this.getAncestorScrollContainers(elementOrElementRef);
    return this.scrolled(auditTimeInMs).pipe(filter((target) => {
      return !target || ancestors.indexOf(target) > -1;
    }));
  }
  /** Returns all registered Scrollables that contain the provided element. */
  getAncestorScrollContainers(elementOrElementRef) {
    const scrollingContainers = [];
    this.scrollContainers.forEach((_subscription, scrollable) => {
      if (this._scrollableContainsElement(scrollable, elementOrElementRef)) {
        scrollingContainers.push(scrollable);
      }
    });
    return scrollingContainers;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */
  _getWindow() {
    return this._document.defaultView || window;
  }
  /** Returns true if the element is contained within the provided Scrollable. */
  _scrollableContainsElement(scrollable, elementOrElementRef) {
    let element = coerceElement(elementOrElementRef);
    let scrollableElement = scrollable.getElementRef().nativeElement;
    do {
      if (element == scrollableElement) {
        return true;
      }
    } while (element = element.parentElement);
    return false;
  }
  /** Sets up the global scroll listeners. */
  _addGlobalListener() {
    this._globalSubscription = this._ngZone.runOutsideAngular(() => {
      const window2 = this._getWindow();
      return fromEvent(window2.document, "scroll").subscribe(() => this._scrolled.next());
    });
  }
  /** Cleans up the global scroll listener. */
  _removeGlobalListener() {
    if (this._globalSubscription) {
      this._globalSubscription.unsubscribe();
      this._globalSubscription = null;
    }
  }
  static {
    this.ɵfac = function ScrollDispatcher_Factory(t) {
      return new (t || _ScrollDispatcher)(ɵɵinject(NgZone), ɵɵinject(Platform), ɵɵinject(DOCUMENT, 8));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ScrollDispatcher,
      factory: _ScrollDispatcher.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NgZone
  }, {
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var CdkScrollable = class _CdkScrollable {
  constructor(elementRef, scrollDispatcher, ngZone, dir) {
    this.elementRef = elementRef;
    this.scrollDispatcher = scrollDispatcher;
    this.ngZone = ngZone;
    this.dir = dir;
    this._destroyed = new Subject();
    this._elementScrolled = new Observable((observer) => this.ngZone.runOutsideAngular(() => fromEvent(this.elementRef.nativeElement, "scroll").pipe(takeUntil(this._destroyed)).subscribe(observer)));
  }
  ngOnInit() {
    this.scrollDispatcher.register(this);
  }
  ngOnDestroy() {
    this.scrollDispatcher.deregister(this);
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Returns observable that emits when a scroll event is fired on the host element. */
  elementScrolled() {
    return this._elementScrolled;
  }
  /** Gets the ElementRef for the viewport. */
  getElementRef() {
    return this.elementRef;
  }
  /**
   * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
   * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param options specified the offsets to scroll to.
   */
  scrollTo(options) {
    const el = this.elementRef.nativeElement;
    const isRtl = this.dir && this.dir.value == "rtl";
    if (options.left == null) {
      options.left = isRtl ? options.end : options.start;
    }
    if (options.right == null) {
      options.right = isRtl ? options.start : options.end;
    }
    if (options.bottom != null) {
      options.top = el.scrollHeight - el.clientHeight - options.bottom;
    }
    if (isRtl && getRtlScrollAxisType() != RtlScrollAxisType.NORMAL) {
      if (options.left != null) {
        options.right = el.scrollWidth - el.clientWidth - options.left;
      }
      if (getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
        options.left = options.right;
      } else if (getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
        options.left = options.right ? -options.right : options.right;
      }
    } else {
      if (options.right != null) {
        options.left = el.scrollWidth - el.clientWidth - options.right;
      }
    }
    this._applyScrollToOptions(options);
  }
  _applyScrollToOptions(options) {
    const el = this.elementRef.nativeElement;
    if (supportsScrollBehavior()) {
      el.scrollTo(options);
    } else {
      if (options.top != null) {
        el.scrollTop = options.top;
      }
      if (options.left != null) {
        el.scrollLeft = options.left;
      }
    }
  }
  /**
   * Measures the scroll offset relative to the specified edge of the viewport. This method can be
   * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
   * about what scrollLeft means in RTL. The values returned by this method are normalized such that
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param from The edge to measure from.
   */
  measureScrollOffset(from) {
    const LEFT = "left";
    const RIGHT = "right";
    const el = this.elementRef.nativeElement;
    if (from == "top") {
      return el.scrollTop;
    }
    if (from == "bottom") {
      return el.scrollHeight - el.clientHeight - el.scrollTop;
    }
    const isRtl = this.dir && this.dir.value == "rtl";
    if (from == "start") {
      from = isRtl ? RIGHT : LEFT;
    } else if (from == "end") {
      from = isRtl ? LEFT : RIGHT;
    }
    if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
      if (from == LEFT) {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      } else {
        return el.scrollLeft;
      }
    } else if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
      if (from == LEFT) {
        return el.scrollLeft + el.scrollWidth - el.clientWidth;
      } else {
        return -el.scrollLeft;
      }
    } else {
      if (from == LEFT) {
        return el.scrollLeft;
      } else {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      }
    }
  }
  static {
    this.ɵfac = function CdkScrollable_Factory(t) {
      return new (t || _CdkScrollable)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ScrollDispatcher), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Directionality, 8));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CdkScrollable,
      selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollable, [{
    type: Directive,
    args: [{
      selector: "[cdk-scrollable], [cdkScrollable]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ScrollDispatcher
  }, {
    type: NgZone
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var DEFAULT_RESIZE_TIME = 20;
var ViewportRuler = class _ViewportRuler {
  constructor(_platform, ngZone, document2) {
    this._platform = _platform;
    this._change = new Subject();
    this._changeListener = (event) => {
      this._change.next(event);
    };
    this._document = document2;
    ngZone.runOutsideAngular(() => {
      if (_platform.isBrowser) {
        const window2 = this._getWindow();
        window2.addEventListener("resize", this._changeListener);
        window2.addEventListener("orientationchange", this._changeListener);
      }
      this.change().subscribe(() => this._viewportSize = null);
    });
  }
  ngOnDestroy() {
    if (this._platform.isBrowser) {
      const window2 = this._getWindow();
      window2.removeEventListener("resize", this._changeListener);
      window2.removeEventListener("orientationchange", this._changeListener);
    }
    this._change.complete();
  }
  /** Returns the viewport's width and height. */
  getViewportSize() {
    if (!this._viewportSize) {
      this._updateViewportSize();
    }
    const output = {
      width: this._viewportSize.width,
      height: this._viewportSize.height
    };
    if (!this._platform.isBrowser) {
      this._viewportSize = null;
    }
    return output;
  }
  /** Gets a DOMRect for the viewport's bounds. */
  getViewportRect() {
    const scrollPosition = this.getViewportScrollPosition();
    const {
      width,
      height
    } = this.getViewportSize();
    return {
      top: scrollPosition.top,
      left: scrollPosition.left,
      bottom: scrollPosition.top + height,
      right: scrollPosition.left + width,
      height,
      width
    };
  }
  /** Gets the (top, left) scroll position of the viewport. */
  getViewportScrollPosition() {
    if (!this._platform.isBrowser) {
      return {
        top: 0,
        left: 0
      };
    }
    const document2 = this._document;
    const window2 = this._getWindow();
    const documentElement = document2.documentElement;
    const documentRect = documentElement.getBoundingClientRect();
    const top = -documentRect.top || document2.body.scrollTop || window2.scrollY || documentElement.scrollTop || 0;
    const left = -documentRect.left || document2.body.scrollLeft || window2.scrollX || documentElement.scrollLeft || 0;
    return {
      top,
      left
    };
  }
  /**
   * Returns a stream that emits whenever the size of the viewport changes.
   * This stream emits outside of the Angular zone.
   * @param throttleTime Time in milliseconds to throttle the stream.
   */
  change(throttleTime2 = DEFAULT_RESIZE_TIME) {
    return throttleTime2 > 0 ? this._change.pipe(auditTime(throttleTime2)) : this._change;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */
  _getWindow() {
    return this._document.defaultView || window;
  }
  /** Updates the cached viewport size. */
  _updateViewportSize() {
    const window2 = this._getWindow();
    this._viewportSize = this._platform.isBrowser ? {
      width: window2.innerWidth,
      height: window2.innerHeight
    } : {
      width: 0,
      height: 0
    };
  }
  static {
    this.ɵfac = function ViewportRuler_Factory(t) {
      return new (t || _ViewportRuler)(ɵɵinject(Platform), ɵɵinject(NgZone), ɵɵinject(DOCUMENT, 8));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ViewportRuler,
      factory: _ViewportRuler.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewportRuler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var VIRTUAL_SCROLLABLE = new InjectionToken("VIRTUAL_SCROLLABLE");
var CdkVirtualScrollable = class _CdkVirtualScrollable extends CdkScrollable {
  constructor(elementRef, scrollDispatcher, ngZone, dir) {
    super(elementRef, scrollDispatcher, ngZone, dir);
  }
  /**
   * Measure the viewport size for the provided orientation.
   *
   * @param orientation The orientation to measure the size from.
   */
  measureViewportSize(orientation) {
    const viewportEl = this.elementRef.nativeElement;
    return orientation === "horizontal" ? viewportEl.clientWidth : viewportEl.clientHeight;
  }
  static {
    this.ɵfac = function CdkVirtualScrollable_Factory(t) {
      return new (t || _CdkVirtualScrollable)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ScrollDispatcher), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Directionality, 8));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CdkVirtualScrollable,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollable, [{
    type: Directive
  }], () => [{
    type: ElementRef
  }, {
    type: ScrollDispatcher
  }, {
    type: NgZone
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
function rangesEqual(r1, r2) {
  return r1.start == r2.start && r1.end == r2.end;
}
var SCROLL_SCHEDULER = typeof requestAnimationFrame !== "undefined" ? animationFrameScheduler : asapScheduler;
var CdkVirtualScrollViewport = class _CdkVirtualScrollViewport extends CdkVirtualScrollable {
  /** The direction the viewport scrolls. */
  get orientation() {
    return this._orientation;
  }
  set orientation(orientation) {
    if (this._orientation !== orientation) {
      this._orientation = orientation;
      this._calculateSpacerSize();
    }
  }
  constructor(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher, viewportRuler, scrollable) {
    super(elementRef, scrollDispatcher, ngZone, dir);
    this.elementRef = elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._scrollStrategy = _scrollStrategy;
    this.scrollable = scrollable;
    this._platform = inject(Platform);
    this._detachedSubject = new Subject();
    this._renderedRangeSubject = new Subject();
    this._orientation = "vertical";
    this.appendOnly = false;
    this.scrolledIndexChange = new Observable((observer) => this._scrollStrategy.scrolledIndexChange.subscribe((index) => Promise.resolve().then(() => this.ngZone.run(() => observer.next(index)))));
    this.renderedRangeStream = this._renderedRangeSubject;
    this._totalContentSize = 0;
    this._totalContentWidth = "";
    this._totalContentHeight = "";
    this._renderedRange = {
      start: 0,
      end: 0
    };
    this._dataLength = 0;
    this._viewportSize = 0;
    this._renderedContentOffset = 0;
    this._renderedContentOffsetNeedsRewrite = false;
    this._isChangeDetectionPending = false;
    this._runAfterChangeDetection = [];
    this._viewportChanges = Subscription.EMPTY;
    this._injector = inject(Injector);
    this._isDestroyed = false;
    if (!_scrollStrategy && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
    }
    this._viewportChanges = viewportRuler.change().subscribe(() => {
      this.checkViewportSize();
    });
    if (!this.scrollable) {
      this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable");
      this.scrollable = this;
    }
  }
  ngOnInit() {
    if (!this._platform.isBrowser) {
      return;
    }
    if (this.scrollable === this) {
      super.ngOnInit();
    }
    this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
      this._measureViewportSize();
      this._scrollStrategy.attach(this);
      this.scrollable.elementScrolled().pipe(
        // Start off with a fake scroll event so we properly detect our initial position.
        startWith(null),
        // Collect multiple events into one until the next animation frame. This way if
        // there are multiple scroll events in the same frame we only need to recheck
        // our layout once.
        auditTime(0, SCROLL_SCHEDULER),
        // Usually `elementScrolled` is completed when the scrollable is destroyed, but
        // that may not be the case if a `CdkVirtualScrollableElement` is used so we have
        // to unsubscribe here just in case.
        takeUntil(this._destroyed)
      ).subscribe(() => this._scrollStrategy.onContentScrolled());
      this._markChangeDetectionNeeded();
    }));
  }
  ngOnDestroy() {
    this.detach();
    this._scrollStrategy.detach();
    this._renderedRangeSubject.complete();
    this._detachedSubject.complete();
    this._viewportChanges.unsubscribe();
    this._isDestroyed = true;
    super.ngOnDestroy();
  }
  /** Attaches a `CdkVirtualScrollRepeater` to this viewport. */
  attach(forOf) {
    if (this._forOf && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("CdkVirtualScrollViewport is already attached.");
    }
    this.ngZone.runOutsideAngular(() => {
      this._forOf = forOf;
      this._forOf.dataStream.pipe(takeUntil(this._detachedSubject)).subscribe((data) => {
        const newLength = data.length;
        if (newLength !== this._dataLength) {
          this._dataLength = newLength;
          this._scrollStrategy.onDataLengthChanged();
        }
        this._doChangeDetection();
      });
    });
  }
  /** Detaches the current `CdkVirtualForOf`. */
  detach() {
    this._forOf = null;
    this._detachedSubject.next();
  }
  /** Gets the length of the data bound to this viewport (in number of items). */
  getDataLength() {
    return this._dataLength;
  }
  /** Gets the size of the viewport (in pixels). */
  getViewportSize() {
    return this._viewportSize;
  }
  // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
  // cycle happens. I'm being careful to only call it after the render cycle is complete and before
  // setting it to something else, but its error prone and should probably be split into
  // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
  /** Get the current rendered range of items. */
  getRenderedRange() {
    return this._renderedRange;
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from];
  }
  /**
   * Sets the total size of all content (in pixels), including content that is not currently
   * rendered.
   */
  setTotalContentSize(size) {
    if (this._totalContentSize !== size) {
      this._totalContentSize = size;
      this._calculateSpacerSize();
      this._markChangeDetectionNeeded();
    }
  }
  /** Sets the currently rendered range of indices. */
  setRenderedRange(range) {
    if (!rangesEqual(this._renderedRange, range)) {
      if (this.appendOnly) {
        range = {
          start: 0,
          end: Math.max(this._renderedRange.end, range.end)
        };
      }
      this._renderedRangeSubject.next(this._renderedRange = range);
      this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered());
    }
  }
  /**
   * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
   */
  getOffsetToRenderedContentStart() {
    return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
  }
  /**
   * Sets the offset from the start of the viewport to either the start or end of the rendered data
   * (in pixels).
   */
  setRenderedContentOffset(offset, to = "to-start") {
    offset = this.appendOnly && to === "to-start" ? 0 : offset;
    const isRtl = this.dir && this.dir.value == "rtl";
    const isHorizontal = this.orientation == "horizontal";
    const axis = isHorizontal ? "X" : "Y";
    const axisDirection = isHorizontal && isRtl ? -1 : 1;
    let transform = `translate${axis}(${Number(axisDirection * offset)}px)`;
    this._renderedContentOffset = offset;
    if (to === "to-end") {
      transform += ` translate${axis}(-100%)`;
      this._renderedContentOffsetNeedsRewrite = true;
    }
    if (this._renderedContentTransform != transform) {
      this._renderedContentTransform = transform;
      this._markChangeDetectionNeeded(() => {
        if (this._renderedContentOffsetNeedsRewrite) {
          this._renderedContentOffset -= this.measureRenderedContentSize();
          this._renderedContentOffsetNeedsRewrite = false;
          this.setRenderedContentOffset(this._renderedContentOffset);
        } else {
          this._scrollStrategy.onRenderedOffsetChanged();
        }
      });
    }
  }
  /**
   * Scrolls to the given offset from the start of the viewport. Please note that this is not always
   * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
   * direction, this would be the equivalent of setting a fictional `scrollRight` property.
   * @param offset The offset to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
   */
  scrollToOffset(offset, behavior = "auto") {
    const options = {
      behavior
    };
    if (this.orientation === "horizontal") {
      options.start = offset;
    } else {
      options.top = offset;
    }
    this.scrollable.scrollTo(options);
  }
  /**
   * Scrolls to the offset for the given index.
   * @param index The index of the element to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
   */
  scrollToIndex(index, behavior = "auto") {
    this._scrollStrategy.scrollToIndex(index, behavior);
  }
  /**
   * Gets the current scroll offset from the start of the scrollable (in pixels).
   * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
   *     in horizontal mode.
   */
  measureScrollOffset(from) {
    let measureScrollOffset;
    if (this.scrollable == this) {
      measureScrollOffset = (_from) => super.measureScrollOffset(_from);
    } else {
      measureScrollOffset = (_from) => this.scrollable.measureScrollOffset(_from);
    }
    return Math.max(0, measureScrollOffset(from ?? (this.orientation === "horizontal" ? "start" : "top")) - this.measureViewportOffset());
  }
  /**
   * Measures the offset of the viewport from the scrolling container
   * @param from The edge to measure from.
   */
  measureViewportOffset(from) {
    let fromRect;
    const LEFT = "left";
    const RIGHT = "right";
    const isRtl = this.dir?.value == "rtl";
    if (from == "start") {
      fromRect = isRtl ? RIGHT : LEFT;
    } else if (from == "end") {
      fromRect = isRtl ? LEFT : RIGHT;
    } else if (from) {
      fromRect = from;
    } else {
      fromRect = this.orientation === "horizontal" ? "left" : "top";
    }
    const scrollerClientRect = this.scrollable.measureBoundingClientRectWithScrollOffset(fromRect);
    const viewportClientRect = this.elementRef.nativeElement.getBoundingClientRect()[fromRect];
    return viewportClientRect - scrollerClientRect;
  }
  /** Measure the combined size of all of the rendered items. */
  measureRenderedContentSize() {
    const contentEl = this._contentWrapper.nativeElement;
    return this.orientation === "horizontal" ? contentEl.offsetWidth : contentEl.offsetHeight;
  }
  /**
   * Measure the total combined size of the given range. Throws if the range includes items that are
   * not rendered.
   */
  measureRangeSize(range) {
    if (!this._forOf) {
      return 0;
    }
    return this._forOf.measureRangeSize(range, this.orientation);
  }
  /** Update the viewport dimensions and re-render. */
  checkViewportSize() {
    this._measureViewportSize();
    this._scrollStrategy.onDataLengthChanged();
  }
  /** Measure the viewport size. */
  _measureViewportSize() {
    this._viewportSize = this.scrollable.measureViewportSize(this.orientation);
  }
  /** Queue up change detection to run. */
  _markChangeDetectionNeeded(runAfter) {
    if (runAfter) {
      this._runAfterChangeDetection.push(runAfter);
    }
    if (!this._isChangeDetectionPending) {
      this._isChangeDetectionPending = true;
      this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
        this._doChangeDetection();
      }));
    }
  }
  /** Run change detection. */
  _doChangeDetection() {
    if (this._isDestroyed) {
      return;
    }
    this.ngZone.run(() => {
      this._changeDetectorRef.markForCheck();
      this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
      afterNextRender(() => {
        this._isChangeDetectionPending = false;
        const runAfterChangeDetection = this._runAfterChangeDetection;
        this._runAfterChangeDetection = [];
        for (const fn of runAfterChangeDetection) {
          fn();
        }
      }, {
        injector: this._injector
      });
    });
  }
  /** Calculates the `style.width` and `style.height` for the spacer element. */
  _calculateSpacerSize() {
    this._totalContentHeight = this.orientation === "horizontal" ? "" : `${this._totalContentSize}px`;
    this._totalContentWidth = this.orientation === "horizontal" ? `${this._totalContentSize}px` : "";
  }
  static {
    this.ɵfac = function CdkVirtualScrollViewport_Factory(t) {
      return new (t || _CdkVirtualScrollViewport)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(VIRTUAL_SCROLL_STRATEGY, 8), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(ScrollDispatcher), ɵɵdirectiveInject(ViewportRuler), ɵɵdirectiveInject(VIRTUAL_SCROLLABLE, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CdkVirtualScrollViewport,
      selectors: [["cdk-virtual-scroll-viewport"]],
      viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._contentWrapper = _t.first);
        }
      },
      hostAttrs: [1, "cdk-virtual-scroll-viewport"],
      hostVars: 4,
      hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
        }
      },
      inputs: {
        orientation: "orientation",
        appendOnly: [InputFlags.HasDecoratorInputTransform, "appendOnly", "appendOnly", booleanAttribute]
      },
      outputs: {
        scrolledIndexChange: "scrolledIndexChange"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: CdkScrollable,
        useFactory: (virtualScrollable, viewport) => virtualScrollable || viewport,
        deps: [[new Optional(), new Inject(VIRTUAL_SCROLLABLE)], _CdkVirtualScrollViewport]
      }]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 4,
      vars: 4,
      consts: [["contentWrapper", ""], [1, "cdk-virtual-scroll-content-wrapper"], [1, "cdk-virtual-scroll-spacer"]],
      template: function CdkVirtualScrollViewport_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "div", 1, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
          ɵɵelement(3, "div", 2);
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵstyleProp("width", ctx._totalContentWidth)("height", ctx._totalContentHeight);
        }
      },
      styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollViewport, [{
    type: Component,
    args: [{
      selector: "cdk-virtual-scroll-viewport",
      host: {
        "class": "cdk-virtual-scroll-viewport",
        "[class.cdk-virtual-scroll-orientation-horizontal]": 'orientation === "horizontal"',
        "[class.cdk-virtual-scroll-orientation-vertical]": 'orientation !== "horizontal"'
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      providers: [{
        provide: CdkScrollable,
        useFactory: (virtualScrollable, viewport) => virtualScrollable || viewport,
        deps: [[new Optional(), new Inject(VIRTUAL_SCROLLABLE)], CdkVirtualScrollViewport]
      }],
      template: '<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class="cdk-virtual-scroll-content-wrapper">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class="cdk-virtual-scroll-spacer"\n     [style.width]="_totalContentWidth" [style.height]="_totalContentHeight"></div>\n',
      styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [VIRTUAL_SCROLL_STRATEGY]
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: ScrollDispatcher
  }, {
    type: ViewportRuler
  }, {
    type: CdkVirtualScrollable,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [VIRTUAL_SCROLLABLE]
    }]
  }], {
    orientation: [{
      type: Input
    }],
    appendOnly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrolledIndexChange: [{
      type: Output
    }],
    _contentWrapper: [{
      type: ViewChild,
      args: ["contentWrapper", {
        static: true
      }]
    }]
  });
})();
function getOffset(orientation, direction, node) {
  const el = node;
  if (!el.getBoundingClientRect) {
    return 0;
  }
  const rect = el.getBoundingClientRect();
  if (orientation === "horizontal") {
    return direction === "start" ? rect.left : rect.right;
  }
  return direction === "start" ? rect.top : rect.bottom;
}
var CdkVirtualForOf = class _CdkVirtualForOf {
  /** The DataSource to display. */
  get cdkVirtualForOf() {
    return this._cdkVirtualForOf;
  }
  set cdkVirtualForOf(value) {
    this._cdkVirtualForOf = value;
    if (isDataSource(value)) {
      this._dataSourceChanges.next(value);
    } else {
      this._dataSourceChanges.next(new ArrayDataSource(isObservable(value) ? value : Array.from(value || [])));
    }
  }
  /**
   * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
   * the item and produces a value to be used as the item's identity when tracking changes.
   */
  get cdkVirtualForTrackBy() {
    return this._cdkVirtualForTrackBy;
  }
  set cdkVirtualForTrackBy(fn) {
    this._needsUpdate = true;
    this._cdkVirtualForTrackBy = fn ? (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item) : void 0;
  }
  /** The template used to stamp out new elements. */
  set cdkVirtualForTemplate(value) {
    if (value) {
      this._needsUpdate = true;
      this._template = value;
    }
  }
  /**
   * The size of the cache used to store templates that are not being used for re-use later.
   * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
   */
  get cdkVirtualForTemplateCacheSize() {
    return this._viewRepeater.viewCacheSize;
  }
  set cdkVirtualForTemplateCacheSize(size) {
    this._viewRepeater.viewCacheSize = coerceNumberProperty(size);
  }
  constructor(_viewContainerRef, _template, _differs, _viewRepeater, _viewport, ngZone) {
    this._viewContainerRef = _viewContainerRef;
    this._template = _template;
    this._differs = _differs;
    this._viewRepeater = _viewRepeater;
    this._viewport = _viewport;
    this.viewChange = new Subject();
    this._dataSourceChanges = new Subject();
    this.dataStream = this._dataSourceChanges.pipe(
      // Start off with null `DataSource`.
      startWith(null),
      // Bundle up the previous and current data sources so we can work with both.
      pairwise(),
      // Use `_changeDataSource` to disconnect from the previous data source and connect to the
      // new one, passing back a stream of data changes which we run through `switchMap` to give
      // us a data stream that emits the latest data from whatever the current `DataSource` is.
      switchMap(([prev, cur]) => this._changeDataSource(prev, cur)),
      // Replay the last emitted data when someone subscribes.
      shareReplay(1)
    );
    this._differ = null;
    this._needsUpdate = false;
    this._destroyed = new Subject();
    this.dataStream.subscribe((data) => {
      this._data = data;
      this._onRenderedDataChange();
    });
    this._viewport.renderedRangeStream.pipe(takeUntil(this._destroyed)).subscribe((range) => {
      this._renderedRange = range;
      if (this.viewChange.observers.length) {
        ngZone.run(() => this.viewChange.next(this._renderedRange));
      }
      this._onRenderedDataChange();
    });
    this._viewport.attach(this);
  }
  /**
   * Measures the combined size (width for horizontal orientation, height for vertical) of all items
   * in the specified range. Throws an error if the range includes items that are not currently
   * rendered.
   */
  measureRangeSize(range, orientation) {
    if (range.start >= range.end) {
      return 0;
    }
    if ((range.start < this._renderedRange.start || range.end > this._renderedRange.end) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Error: attempted to measure an item that isn't rendered.`);
    }
    const renderedStartIndex = range.start - this._renderedRange.start;
    const rangeLen = range.end - range.start;
    let firstNode;
    let lastNode;
    for (let i = 0; i < rangeLen; i++) {
      const view = this._viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        firstNode = lastNode = view.rootNodes[0];
        break;
      }
    }
    for (let i = rangeLen - 1; i > -1; i--) {
      const view = this._viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        lastNode = view.rootNodes[view.rootNodes.length - 1];
        break;
      }
    }
    return firstNode && lastNode ? getOffset(orientation, "end", lastNode) - getOffset(orientation, "start", firstNode) : 0;
  }
  ngDoCheck() {
    if (this._differ && this._needsUpdate) {
      const changes = this._differ.diff(this._renderedItems);
      if (!changes) {
        this._updateContext();
      } else {
        this._applyChanges(changes);
      }
      this._needsUpdate = false;
    }
  }
  ngOnDestroy() {
    this._viewport.detach();
    this._dataSourceChanges.next(void 0);
    this._dataSourceChanges.complete();
    this.viewChange.complete();
    this._destroyed.next();
    this._destroyed.complete();
    this._viewRepeater.detach();
  }
  /** React to scroll state changes in the viewport. */
  _onRenderedDataChange() {
    if (!this._renderedRange) {
      return;
    }
    this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
    if (!this._differ) {
      this._differ = this._differs.find(this._renderedItems).create((index, item) => {
        return this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(index, item) : item;
      });
    }
    this._needsUpdate = true;
  }
  /** Swap out one `DataSource` for another. */
  _changeDataSource(oldDs, newDs) {
    if (oldDs) {
      oldDs.disconnect(this);
    }
    this._needsUpdate = true;
    return newDs ? newDs.connect(this) : of();
  }
  /** Update the `CdkVirtualForOfContext` for all views. */
  _updateContext() {
    const count = this._data.length;
    let i = this._viewContainerRef.length;
    while (i--) {
      const view = this._viewContainerRef.get(i);
      view.context.index = this._renderedRange.start + i;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
      view.detectChanges();
    }
  }
  /** Apply changes to the DOM. */
  _applyChanges(changes) {
    this._viewRepeater.applyChanges(changes, this._viewContainerRef, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record, currentIndex), (record) => record.item);
    changes.forEachIdentityChange((record) => {
      const view = this._viewContainerRef.get(record.currentIndex);
      view.context.$implicit = record.item;
    });
    const count = this._data.length;
    let i = this._viewContainerRef.length;
    while (i--) {
      const view = this._viewContainerRef.get(i);
      view.context.index = this._renderedRange.start + i;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
    }
  }
  /** Update the computed properties on the `CdkVirtualForOfContext`. */
  _updateComputedContextProperties(context) {
    context.first = context.index === 0;
    context.last = context.index === context.count - 1;
    context.even = context.index % 2 === 0;
    context.odd = !context.even;
  }
  _getEmbeddedViewArgs(record, index) {
    return {
      templateRef: this._template,
      context: {
        $implicit: record.item,
        // It's guaranteed that the iterable is not "undefined" or "null" because we only
        // generate views for elements if the "cdkVirtualForOf" iterable has elements.
        cdkVirtualForOf: this._cdkVirtualForOf,
        index: -1,
        count: -1,
        first: false,
        last: false,
        odd: false,
        even: false
      },
      index
    };
  }
  static {
    this.ɵfac = function CdkVirtualForOf_Factory(t) {
      return new (t || _CdkVirtualForOf)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(IterableDiffers), ɵɵdirectiveInject(_VIEW_REPEATER_STRATEGY), ɵɵdirectiveInject(CdkVirtualScrollViewport, 4), ɵɵdirectiveInject(NgZone));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CdkVirtualForOf,
      selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
      inputs: {
        cdkVirtualForOf: "cdkVirtualForOf",
        cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
        cdkVirtualForTemplate: "cdkVirtualForTemplate",
        cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _RecycleViewRepeaterStrategy
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualForOf, [{
    type: Directive,
    args: [{
      selector: "[cdkVirtualFor][cdkVirtualForOf]",
      providers: [{
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _RecycleViewRepeaterStrategy
      }],
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: TemplateRef
  }, {
    type: IterableDiffers
  }, {
    type: _RecycleViewRepeaterStrategy,
    decorators: [{
      type: Inject,
      args: [_VIEW_REPEATER_STRATEGY]
    }]
  }, {
    type: CdkVirtualScrollViewport,
    decorators: [{
      type: SkipSelf
    }]
  }, {
    type: NgZone
  }], {
    cdkVirtualForOf: [{
      type: Input
    }],
    cdkVirtualForTrackBy: [{
      type: Input
    }],
    cdkVirtualForTemplate: [{
      type: Input
    }],
    cdkVirtualForTemplateCacheSize: [{
      type: Input
    }]
  });
})();
var CdkVirtualScrollableElement = class _CdkVirtualScrollableElement extends CdkVirtualScrollable {
  constructor(elementRef, scrollDispatcher, ngZone, dir) {
    super(elementRef, scrollDispatcher, ngZone, dir);
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from] - this.measureScrollOffset(from);
  }
  static {
    this.ɵfac = function CdkVirtualScrollableElement_Factory(t) {
      return new (t || _CdkVirtualScrollableElement)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ScrollDispatcher), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Directionality, 8));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CdkVirtualScrollableElement,
      selectors: [["", "cdkVirtualScrollingElement", ""]],
      hostAttrs: [1, "cdk-virtual-scrollable"],
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: _CdkVirtualScrollableElement
      }]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableElement, [{
    type: Directive,
    args: [{
      selector: "[cdkVirtualScrollingElement]",
      providers: [{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableElement
      }],
      standalone: true,
      host: {
        "class": "cdk-virtual-scrollable"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ScrollDispatcher
  }, {
    type: NgZone
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var CdkVirtualScrollableWindow = class _CdkVirtualScrollableWindow extends CdkVirtualScrollable {
  constructor(scrollDispatcher, ngZone, dir) {
    super(new ElementRef(document.documentElement), scrollDispatcher, ngZone, dir);
    this._elementScrolled = new Observable((observer) => this.ngZone.runOutsideAngular(() => fromEvent(document, "scroll").pipe(takeUntil(this._destroyed)).subscribe(observer)));
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from];
  }
  static {
    this.ɵfac = function CdkVirtualScrollableWindow_Factory(t) {
      return new (t || _CdkVirtualScrollableWindow)(ɵɵdirectiveInject(ScrollDispatcher), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Directionality, 8));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CdkVirtualScrollableWindow,
      selectors: [["cdk-virtual-scroll-viewport", "scrollWindow", ""]],
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: _CdkVirtualScrollableWindow
      }]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableWindow, [{
    type: Directive,
    args: [{
      selector: "cdk-virtual-scroll-viewport[scrollWindow]",
      providers: [{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableWindow
      }],
      standalone: true
    }]
  }], () => [{
    type: ScrollDispatcher
  }, {
    type: NgZone
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var CdkScrollableModule = class _CdkScrollableModule {
  static {
    this.ɵfac = function CdkScrollableModule_Factory(t) {
      return new (t || _CdkScrollableModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CdkScrollableModule,
      imports: [CdkScrollable],
      exports: [CdkScrollable]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollableModule, [{
    type: NgModule,
    args: [{
      exports: [CdkScrollable],
      imports: [CdkScrollable]
    }]
  }], null, null);
})();
var ScrollingModule = class _ScrollingModule {
  static {
    this.ɵfac = function ScrollingModule_Factory(t) {
      return new (t || _ScrollingModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ScrollingModule,
      imports: [BidiModule, CdkScrollableModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollableWindow, CdkVirtualScrollableElement],
      exports: [BidiModule, CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, CdkVirtualScrollableWindow, CdkVirtualScrollableElement]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [BidiModule, CdkScrollableModule, BidiModule, CdkScrollableModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollingModule, [{
    type: NgModule,
    args: [{
      imports: [BidiModule, CdkScrollableModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollableWindow, CdkVirtualScrollableElement],
      exports: [BidiModule, CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, CdkVirtualScrollableWindow, CdkVirtualScrollableElement]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/portal.mjs
function throwNullPortalError() {
  throw Error("Must provide a portal to attach");
}
function throwPortalAlreadyAttachedError() {
  throw Error("Host already has a portal attached");
}
function throwPortalOutletAlreadyDisposedError() {
  throw Error("This PortalOutlet has already been disposed");
}
function throwUnknownPortalTypeError() {
  throw Error("Attempting to attach an unknown Portal type. BasePortalOutlet accepts either a ComponentPortal or a TemplatePortal.");
}
function throwNullPortalOutletError() {
  throw Error("Attempting to attach a portal to a null PortalOutlet");
}
function throwNoPortalAttachedError() {
  throw Error("Attempting to detach a portal that is not attached to a host");
}
var Portal = class {
  /** Attach this portal to a host. */
  attach(host) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (host == null) {
        throwNullPortalOutletError();
      }
      if (host.hasAttached()) {
        throwPortalAlreadyAttachedError();
      }
    }
    this._attachedHost = host;
    return host.attach(this);
  }
  /** Detach this portal from its host */
  detach() {
    let host = this._attachedHost;
    if (host != null) {
      this._attachedHost = null;
      host.detach();
    } else if (typeof ngDevMode === "undefined" || ngDevMode) {
      throwNoPortalAttachedError();
    }
  }
  /** Whether this portal is attached to a host. */
  get isAttached() {
    return this._attachedHost != null;
  }
  /**
   * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
   * the PortalOutlet when it is performing an `attach()` or `detach()`.
   */
  setAttachedHost(host) {
    this._attachedHost = host;
  }
};
var ComponentPortal = class extends Portal {
  constructor(component, viewContainerRef, injector, componentFactoryResolver, projectableNodes) {
    super();
    this.component = component;
    this.viewContainerRef = viewContainerRef;
    this.injector = injector;
    this.componentFactoryResolver = componentFactoryResolver;
    this.projectableNodes = projectableNodes;
  }
};
var TemplatePortal = class extends Portal {
  constructor(templateRef, viewContainerRef, context, injector) {
    super();
    this.templateRef = templateRef;
    this.viewContainerRef = viewContainerRef;
    this.context = context;
    this.injector = injector;
  }
  get origin() {
    return this.templateRef.elementRef;
  }
  /**
   * Attach the portal to the provided `PortalOutlet`.
   * When a context is provided it will override the `context` property of the `TemplatePortal`
   * instance.
   */
  attach(host, context = this.context) {
    this.context = context;
    return super.attach(host);
  }
  detach() {
    this.context = void 0;
    return super.detach();
  }
};
var DomPortal = class extends Portal {
  constructor(element) {
    super();
    this.element = element instanceof ElementRef ? element.nativeElement : element;
  }
};
var BasePortalOutlet = class {
  constructor() {
    this._isDisposed = false;
    this.attachDomPortal = null;
  }
  /** Whether this host has an attached portal. */
  hasAttached() {
    return !!this._attachedPortal;
  }
  /** Attaches a portal. */
  attach(portal) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!portal) {
        throwNullPortalError();
      }
      if (this.hasAttached()) {
        throwPortalAlreadyAttachedError();
      }
      if (this._isDisposed) {
        throwPortalOutletAlreadyDisposedError();
      }
    }
    if (portal instanceof ComponentPortal) {
      this._attachedPortal = portal;
      return this.attachComponentPortal(portal);
    } else if (portal instanceof TemplatePortal) {
      this._attachedPortal = portal;
      return this.attachTemplatePortal(portal);
    } else if (this.attachDomPortal && portal instanceof DomPortal) {
      this._attachedPortal = portal;
      return this.attachDomPortal(portal);
    }
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      throwUnknownPortalTypeError();
    }
  }
  /** Detaches a previously attached portal. */
  detach() {
    if (this._attachedPortal) {
      this._attachedPortal.setAttachedHost(null);
      this._attachedPortal = null;
    }
    this._invokeDisposeFn();
  }
  /** Permanently dispose of this portal host. */
  dispose() {
    if (this.hasAttached()) {
      this.detach();
    }
    this._invokeDisposeFn();
    this._isDisposed = true;
  }
  /** @docs-private */
  setDisposeFn(fn) {
    this._disposeFn = fn;
  }
  _invokeDisposeFn() {
    if (this._disposeFn) {
      this._disposeFn();
      this._disposeFn = null;
    }
  }
};
var DomPortalOutlet = class extends BasePortalOutlet {
  /**
   * @param outletElement Element into which the content is projected.
   * @param _componentFactoryResolver Used to resolve the component factory.
   *   Only required when attaching component portals.
   * @param _appRef Reference to the application. Only used in component portals when there
   *   is no `ViewContainerRef` available.
   * @param _defaultInjector Injector to use as a fallback when the portal being attached doesn't
   *   have one. Only used for component portals.
   * @param _document Reference to the document. Used when attaching a DOM portal. Will eventually
   *   become a required parameter.
   */
  constructor(outletElement, _componentFactoryResolver, _appRef, _defaultInjector, _document) {
    super();
    this.outletElement = outletElement;
    this._componentFactoryResolver = _componentFactoryResolver;
    this._appRef = _appRef;
    this._defaultInjector = _defaultInjector;
    this.attachDomPortal = (portal) => {
      if (!this._document && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("Cannot attach DOM portal without _document constructor parameter");
      }
      const element = portal.element;
      if (!element.parentNode && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("DOM portal content must be attached to a parent node.");
      }
      const anchorNode = this._document.createComment("dom-portal");
      element.parentNode.insertBefore(anchorNode, element);
      this.outletElement.appendChild(element);
      this._attachedPortal = portal;
      super.setDisposeFn(() => {
        if (anchorNode.parentNode) {
          anchorNode.parentNode.replaceChild(element, anchorNode);
        }
      });
    };
    this._document = _document;
  }
  /**
   * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
   * @param portal Portal to be attached
   * @returns Reference to the created component.
   */
  attachComponentPortal(portal) {
    const resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
    if ((typeof ngDevMode === "undefined" || ngDevMode) && !resolver) {
      throw Error("Cannot attach component portal to outlet without a ComponentFactoryResolver.");
    }
    const componentFactory = resolver.resolveComponentFactory(portal.component);
    let componentRef;
    if (portal.viewContainerRef) {
      componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.injector, portal.projectableNodes || void 0);
      this.setDisposeFn(() => componentRef.destroy());
    } else {
      if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._appRef) {
        throw Error("Cannot attach component portal to outlet without an ApplicationRef.");
      }
      componentRef = componentFactory.create(portal.injector || this._defaultInjector || Injector.NULL);
      this._appRef.attachView(componentRef.hostView);
      this.setDisposeFn(() => {
        if (this._appRef.viewCount > 0) {
          this._appRef.detachView(componentRef.hostView);
        }
        componentRef.destroy();
      });
    }
    this.outletElement.appendChild(this._getComponentRootNode(componentRef));
    this._attachedPortal = portal;
    return componentRef;
  }
  /**
   * Attaches a template portal to the DOM as an embedded view.
   * @param portal Portal to be attached.
   * @returns Reference to the created embedded view.
   */
  attachTemplatePortal(portal) {
    let viewContainer = portal.viewContainerRef;
    let viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context, {
      injector: portal.injector
    });
    viewRef.rootNodes.forEach((rootNode) => this.outletElement.appendChild(rootNode));
    viewRef.detectChanges();
    this.setDisposeFn(() => {
      let index = viewContainer.indexOf(viewRef);
      if (index !== -1) {
        viewContainer.remove(index);
      }
    });
    this._attachedPortal = portal;
    return viewRef;
  }
  /**
   * Clears out a portal from the DOM.
   */
  dispose() {
    super.dispose();
    this.outletElement.remove();
  }
  /** Gets the root HTMLElement for an instantiated component. */
  _getComponentRootNode(componentRef) {
    return componentRef.hostView.rootNodes[0];
  }
};
var CdkPortal = class _CdkPortal extends TemplatePortal {
  constructor(templateRef, viewContainerRef) {
    super(templateRef, viewContainerRef);
  }
  static {
    this.ɵfac = function CdkPortal_Factory(t) {
      return new (t || _CdkPortal)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(ViewContainerRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CdkPortal,
      selectors: [["", "cdkPortal", ""]],
      exportAs: ["cdkPortal"],
      standalone: true,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkPortal, [{
    type: Directive,
    args: [{
      selector: "[cdkPortal]",
      exportAs: "cdkPortal",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }, {
    type: ViewContainerRef
  }], null);
})();
var TemplatePortalDirective = class _TemplatePortalDirective extends CdkPortal {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTemplatePortalDirective_BaseFactory;
      return function TemplatePortalDirective_Factory(t) {
        return (ɵTemplatePortalDirective_BaseFactory || (ɵTemplatePortalDirective_BaseFactory = ɵɵgetInheritedFactory(_TemplatePortalDirective)))(t || _TemplatePortalDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TemplatePortalDirective,
      selectors: [["", "cdk-portal", ""], ["", "portal", ""]],
      exportAs: ["cdkPortal"],
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: CdkPortal,
        useExisting: _TemplatePortalDirective
      }]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplatePortalDirective, [{
    type: Directive,
    args: [{
      selector: "[cdk-portal], [portal]",
      exportAs: "cdkPortal",
      providers: [{
        provide: CdkPortal,
        useExisting: TemplatePortalDirective
      }],
      standalone: true
    }]
  }], null, null);
})();
var CdkPortalOutlet = class _CdkPortalOutlet extends BasePortalOutlet {
  constructor(_componentFactoryResolver, _viewContainerRef, _document) {
    super();
    this._componentFactoryResolver = _componentFactoryResolver;
    this._viewContainerRef = _viewContainerRef;
    this._isInitialized = false;
    this.attached = new EventEmitter();
    this.attachDomPortal = (portal) => {
      if (!this._document && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("Cannot attach DOM portal without _document constructor parameter");
      }
      const element = portal.element;
      if (!element.parentNode && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("DOM portal content must be attached to a parent node.");
      }
      const anchorNode = this._document.createComment("dom-portal");
      portal.setAttachedHost(this);
      element.parentNode.insertBefore(anchorNode, element);
      this._getRootNode().appendChild(element);
      this._attachedPortal = portal;
      super.setDisposeFn(() => {
        if (anchorNode.parentNode) {
          anchorNode.parentNode.replaceChild(element, anchorNode);
        }
      });
    };
    this._document = _document;
  }
  /** Portal associated with the Portal outlet. */
  get portal() {
    return this._attachedPortal;
  }
  set portal(portal) {
    if (this.hasAttached() && !portal && !this._isInitialized) {
      return;
    }
    if (this.hasAttached()) {
      super.detach();
    }
    if (portal) {
      super.attach(portal);
    }
    this._attachedPortal = portal || null;
  }
  /** Component or view reference that is attached to the portal. */
  get attachedRef() {
    return this._attachedRef;
  }
  ngOnInit() {
    this._isInitialized = true;
  }
  ngOnDestroy() {
    super.dispose();
    this._attachedRef = this._attachedPortal = null;
  }
  /**
   * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
   *
   * @param portal Portal to be attached to the portal outlet.
   * @returns Reference to the created component.
   */
  attachComponentPortal(portal) {
    portal.setAttachedHost(this);
    const viewContainerRef = portal.viewContainerRef != null ? portal.viewContainerRef : this._viewContainerRef;
    const resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
    const componentFactory = resolver.resolveComponentFactory(portal.component);
    const ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.injector, portal.projectableNodes || void 0);
    if (viewContainerRef !== this._viewContainerRef) {
      this._getRootNode().appendChild(ref.hostView.rootNodes[0]);
    }
    super.setDisposeFn(() => ref.destroy());
    this._attachedPortal = portal;
    this._attachedRef = ref;
    this.attached.emit(ref);
    return ref;
  }
  /**
   * Attach the given TemplatePortal to this PortalHost as an embedded View.
   * @param portal Portal to be attached.
   * @returns Reference to the created embedded view.
   */
  attachTemplatePortal(portal) {
    portal.setAttachedHost(this);
    const viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context, {
      injector: portal.injector
    });
    super.setDisposeFn(() => this._viewContainerRef.clear());
    this._attachedPortal = portal;
    this._attachedRef = viewRef;
    this.attached.emit(viewRef);
    return viewRef;
  }
  /** Gets the root node of the portal outlet. */
  _getRootNode() {
    const nativeElement = this._viewContainerRef.element.nativeElement;
    return nativeElement.nodeType === nativeElement.ELEMENT_NODE ? nativeElement : nativeElement.parentNode;
  }
  static {
    this.ɵfac = function CdkPortalOutlet_Factory(t) {
      return new (t || _CdkPortalOutlet)(ɵɵdirectiveInject(ComponentFactoryResolver$1), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(DOCUMENT));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CdkPortalOutlet,
      selectors: [["", "cdkPortalOutlet", ""]],
      inputs: {
        portal: [InputFlags.None, "cdkPortalOutlet", "portal"]
      },
      outputs: {
        attached: "attached"
      },
      exportAs: ["cdkPortalOutlet"],
      standalone: true,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkPortalOutlet, [{
    type: Directive,
    args: [{
      selector: "[cdkPortalOutlet]",
      exportAs: "cdkPortalOutlet",
      standalone: true
    }]
  }], () => [{
    type: ComponentFactoryResolver$1
  }, {
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    portal: [{
      type: Input,
      args: ["cdkPortalOutlet"]
    }],
    attached: [{
      type: Output
    }]
  });
})();
var PortalHostDirective = class _PortalHostDirective extends CdkPortalOutlet {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵPortalHostDirective_BaseFactory;
      return function PortalHostDirective_Factory(t) {
        return (ɵPortalHostDirective_BaseFactory || (ɵPortalHostDirective_BaseFactory = ɵɵgetInheritedFactory(_PortalHostDirective)))(t || _PortalHostDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _PortalHostDirective,
      selectors: [["", "cdkPortalHost", ""], ["", "portalHost", ""]],
      inputs: {
        portal: [InputFlags.None, "cdkPortalHost", "portal"]
      },
      exportAs: ["cdkPortalHost"],
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: CdkPortalOutlet,
        useExisting: _PortalHostDirective
      }]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortalHostDirective, [{
    type: Directive,
    args: [{
      selector: "[cdkPortalHost], [portalHost]",
      exportAs: "cdkPortalHost",
      inputs: [{
        name: "portal",
        alias: "cdkPortalHost"
      }],
      providers: [{
        provide: CdkPortalOutlet,
        useExisting: PortalHostDirective
      }],
      standalone: true
    }]
  }], null, null);
})();
var PortalModule = class _PortalModule {
  static {
    this.ɵfac = function PortalModule_Factory(t) {
      return new (t || _PortalModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PortalModule,
      imports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
      exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortalModule, [{
    type: NgModule,
    args: [{
      imports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
      exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/keycodes.mjs
var ESCAPE = 27;
function hasModifierKey(event, ...modifiers) {
  if (modifiers.length) {
    return modifiers.some((modifier) => event[modifier]);
  }
  return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}

// node_modules/@angular/cdk/fesm2022/overlay.mjs
var scrollBehaviorSupported2 = supportsScrollBehavior();
var BlockScrollStrategy = class {
  constructor(_viewportRuler, document2) {
    this._viewportRuler = _viewportRuler;
    this._previousHTMLStyles = {
      top: "",
      left: ""
    };
    this._isEnabled = false;
    this._document = document2;
  }
  /** Attaches this scroll strategy to an overlay. */
  attach() {
  }
  /** Blocks page-level scroll while the attached overlay is open. */
  enable() {
    if (this._canBeEnabled()) {
      const root = this._document.documentElement;
      this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition();
      this._previousHTMLStyles.left = root.style.left || "";
      this._previousHTMLStyles.top = root.style.top || "";
      root.style.left = coerceCssPixelValue(-this._previousScrollPosition.left);
      root.style.top = coerceCssPixelValue(-this._previousScrollPosition.top);
      root.classList.add("cdk-global-scrollblock");
      this._isEnabled = true;
    }
  }
  /** Unblocks page-level scroll while the attached overlay is open. */
  disable() {
    if (this._isEnabled) {
      const html = this._document.documentElement;
      const body = this._document.body;
      const htmlStyle = html.style;
      const bodyStyle = body.style;
      const previousHtmlScrollBehavior = htmlStyle.scrollBehavior || "";
      const previousBodyScrollBehavior = bodyStyle.scrollBehavior || "";
      this._isEnabled = false;
      htmlStyle.left = this._previousHTMLStyles.left;
      htmlStyle.top = this._previousHTMLStyles.top;
      html.classList.remove("cdk-global-scrollblock");
      if (scrollBehaviorSupported2) {
        htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = "auto";
      }
      window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
      if (scrollBehaviorSupported2) {
        htmlStyle.scrollBehavior = previousHtmlScrollBehavior;
        bodyStyle.scrollBehavior = previousBodyScrollBehavior;
      }
    }
  }
  _canBeEnabled() {
    const html = this._document.documentElement;
    if (html.classList.contains("cdk-global-scrollblock") || this._isEnabled) {
      return false;
    }
    const body = this._document.body;
    const viewport = this._viewportRuler.getViewportSize();
    return body.scrollHeight > viewport.height || body.scrollWidth > viewport.width;
  }
};
function getMatScrollStrategyAlreadyAttachedError() {
  return Error(`Scroll strategy has already been attached.`);
}
var CloseScrollStrategy = class {
  constructor(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
    this._scrollDispatcher = _scrollDispatcher;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._config = _config;
    this._scrollSubscription = null;
    this._detach = () => {
      this.disable();
      if (this._overlayRef.hasAttached()) {
        this._ngZone.run(() => this._overlayRef.detach());
      }
    };
  }
  /** Attaches this scroll strategy to an overlay. */
  attach(overlayRef) {
    if (this._overlayRef && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatScrollStrategyAlreadyAttachedError();
    }
    this._overlayRef = overlayRef;
  }
  /** Enables the closing of the attached overlay on scroll. */
  enable() {
    if (this._scrollSubscription) {
      return;
    }
    const stream = this._scrollDispatcher.scrolled(0).pipe(filter((scrollable) => {
      return !scrollable || !this._overlayRef.overlayElement.contains(scrollable.getElementRef().nativeElement);
    }));
    if (this._config && this._config.threshold && this._config.threshold > 1) {
      this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
      this._scrollSubscription = stream.subscribe(() => {
        const scrollPosition = this._viewportRuler.getViewportScrollPosition().top;
        if (Math.abs(scrollPosition - this._initialScrollPosition) > this._config.threshold) {
          this._detach();
        } else {
          this._overlayRef.updatePosition();
        }
      });
    } else {
      this._scrollSubscription = stream.subscribe(this._detach);
    }
  }
  /** Disables the closing the attached overlay on scroll. */
  disable() {
    if (this._scrollSubscription) {
      this._scrollSubscription.unsubscribe();
      this._scrollSubscription = null;
    }
  }
  detach() {
    this.disable();
    this._overlayRef = null;
  }
};
var NoopScrollStrategy = class {
  /** Does nothing, as this scroll strategy is a no-op. */
  enable() {
  }
  /** Does nothing, as this scroll strategy is a no-op. */
  disable() {
  }
  /** Does nothing, as this scroll strategy is a no-op. */
  attach() {
  }
};
function isElementScrolledOutsideView(element, scrollContainers) {
  return scrollContainers.some((containerBounds) => {
    const outsideAbove = element.bottom < containerBounds.top;
    const outsideBelow = element.top > containerBounds.bottom;
    const outsideLeft = element.right < containerBounds.left;
    const outsideRight = element.left > containerBounds.right;
    return outsideAbove || outsideBelow || outsideLeft || outsideRight;
  });
}
function isElementClippedByScrolling(element, scrollContainers) {
  return scrollContainers.some((scrollContainerRect) => {
    const clippedAbove = element.top < scrollContainerRect.top;
    const clippedBelow = element.bottom > scrollContainerRect.bottom;
    const clippedLeft = element.left < scrollContainerRect.left;
    const clippedRight = element.right > scrollContainerRect.right;
    return clippedAbove || clippedBelow || clippedLeft || clippedRight;
  });
}
var RepositionScrollStrategy = class {
  constructor(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
    this._scrollDispatcher = _scrollDispatcher;
    this._viewportRuler = _viewportRuler;
    this._ngZone = _ngZone;
    this._config = _config;
    this._scrollSubscription = null;
  }
  /** Attaches this scroll strategy to an overlay. */
  attach(overlayRef) {
    if (this._overlayRef && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatScrollStrategyAlreadyAttachedError();
    }
    this._overlayRef = overlayRef;
  }
  /** Enables repositioning of the attached overlay on scroll. */
  enable() {
    if (!this._scrollSubscription) {
      const throttle = this._config ? this._config.scrollThrottle : 0;
      this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(() => {
        this._overlayRef.updatePosition();
        if (this._config && this._config.autoClose) {
          const overlayRect = this._overlayRef.overlayElement.getBoundingClientRect();
          const {
            width,
            height
          } = this._viewportRuler.getViewportSize();
          const parentRects = [{
            width,
            height,
            bottom: height,
            right: width,
            top: 0,
            left: 0
          }];
          if (isElementScrolledOutsideView(overlayRect, parentRects)) {
            this.disable();
            this._ngZone.run(() => this._overlayRef.detach());
          }
        }
      });
    }
  }
  /** Disables repositioning of the attached overlay on scroll. */
  disable() {
    if (this._scrollSubscription) {
      this._scrollSubscription.unsubscribe();
      this._scrollSubscription = null;
    }
  }
  detach() {
    this.disable();
    this._overlayRef = null;
  }
};
var ScrollStrategyOptions = class _ScrollStrategyOptions {
  constructor(_scrollDispatcher, _viewportRuler, _ngZone, document2) {
    this._scrollDispatcher = _scrollDispatcher;
    this._viewportRuler = _viewportRuler;
    this._ngZone = _ngZone;
    this.noop = () => new NoopScrollStrategy();
    this.close = (config) => new CloseScrollStrategy(this._scrollDispatcher, this._ngZone, this._viewportRuler, config);
    this.block = () => new BlockScrollStrategy(this._viewportRuler, this._document);
    this.reposition = (config) => new RepositionScrollStrategy(this._scrollDispatcher, this._viewportRuler, this._ngZone, config);
    this._document = document2;
  }
  static {
    this.ɵfac = function ScrollStrategyOptions_Factory(t) {
      return new (t || _ScrollStrategyOptions)(ɵɵinject(ScrollDispatcher), ɵɵinject(ViewportRuler), ɵɵinject(NgZone), ɵɵinject(DOCUMENT));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ScrollStrategyOptions,
      factory: _ScrollStrategyOptions.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollStrategyOptions, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ScrollDispatcher
  }, {
    type: ViewportRuler
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var OverlayConfig = class {
  constructor(config) {
    this.scrollStrategy = new NoopScrollStrategy();
    this.panelClass = "";
    this.hasBackdrop = false;
    this.backdropClass = "cdk-overlay-dark-backdrop";
    this.disposeOnNavigation = false;
    if (config) {
      const configKeys = Object.keys(config);
      for (const key of configKeys) {
        if (config[key] !== void 0) {
          this[key] = config[key];
        }
      }
    }
  }
};
var ConnectedOverlayPositionChange = class {
  constructor(connectionPair, scrollableViewProperties) {
    this.connectionPair = connectionPair;
    this.scrollableViewProperties = scrollableViewProperties;
  }
};
function validateVerticalPosition(property, value) {
  if (value !== "top" && value !== "bottom" && value !== "center") {
    throw Error(`ConnectedPosition: Invalid ${property} "${value}". Expected "top", "bottom" or "center".`);
  }
}
function validateHorizontalPosition(property, value) {
  if (value !== "start" && value !== "end" && value !== "center") {
    throw Error(`ConnectedPosition: Invalid ${property} "${value}". Expected "start", "end" or "center".`);
  }
}
var BaseOverlayDispatcher = class _BaseOverlayDispatcher {
  constructor(document2) {
    this._attachedOverlays = [];
    this._document = document2;
  }
  ngOnDestroy() {
    this.detach();
  }
  /** Add a new overlay to the list of attached overlay refs. */
  add(overlayRef) {
    this.remove(overlayRef);
    this._attachedOverlays.push(overlayRef);
  }
  /** Remove an overlay from the list of attached overlay refs. */
  remove(overlayRef) {
    const index = this._attachedOverlays.indexOf(overlayRef);
    if (index > -1) {
      this._attachedOverlays.splice(index, 1);
    }
    if (this._attachedOverlays.length === 0) {
      this.detach();
    }
  }
  static {
    this.ɵfac = function BaseOverlayDispatcher_Factory(t) {
      return new (t || _BaseOverlayDispatcher)(ɵɵinject(DOCUMENT));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BaseOverlayDispatcher,
      factory: _BaseOverlayDispatcher.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseOverlayDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var OverlayKeyboardDispatcher = class _OverlayKeyboardDispatcher extends BaseOverlayDispatcher {
  constructor(document2, _ngZone) {
    super(document2);
    this._ngZone = _ngZone;
    this._keydownListener = (event) => {
      const overlays = this._attachedOverlays;
      for (let i = overlays.length - 1; i > -1; i--) {
        if (overlays[i]._keydownEvents.observers.length > 0) {
          const keydownEvents = overlays[i]._keydownEvents;
          if (this._ngZone) {
            this._ngZone.run(() => keydownEvents.next(event));
          } else {
            keydownEvents.next(event);
          }
          break;
        }
      }
    };
  }
  /** Add a new overlay to the list of attached overlay refs. */
  add(overlayRef) {
    super.add(overlayRef);
    if (!this._isAttached) {
      if (this._ngZone) {
        this._ngZone.runOutsideAngular(() => this._document.body.addEventListener("keydown", this._keydownListener));
      } else {
        this._document.body.addEventListener("keydown", this._keydownListener);
      }
      this._isAttached = true;
    }
  }
  /** Detaches the global keyboard event listener. */
  detach() {
    if (this._isAttached) {
      this._document.body.removeEventListener("keydown", this._keydownListener);
      this._isAttached = false;
    }
  }
  static {
    this.ɵfac = function OverlayKeyboardDispatcher_Factory(t) {
      return new (t || _OverlayKeyboardDispatcher)(ɵɵinject(DOCUMENT), ɵɵinject(NgZone, 8));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OverlayKeyboardDispatcher,
      factory: _OverlayKeyboardDispatcher.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayKeyboardDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: NgZone,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var OverlayOutsideClickDispatcher = class _OverlayOutsideClickDispatcher extends BaseOverlayDispatcher {
  constructor(document2, _platform, _ngZone) {
    super(document2);
    this._platform = _platform;
    this._ngZone = _ngZone;
    this._cursorStyleIsSet = false;
    this._pointerDownListener = (event) => {
      this._pointerDownEventTarget = _getEventTarget(event);
    };
    this._clickListener = (event) => {
      const target = _getEventTarget(event);
      const origin = event.type === "click" && this._pointerDownEventTarget ? this._pointerDownEventTarget : target;
      this._pointerDownEventTarget = null;
      const overlays = this._attachedOverlays.slice();
      for (let i = overlays.length - 1; i > -1; i--) {
        const overlayRef = overlays[i];
        if (overlayRef._outsidePointerEvents.observers.length < 1 || !overlayRef.hasAttached()) {
          continue;
        }
        if (containsPierceShadowDom(overlayRef.overlayElement, target) || containsPierceShadowDom(overlayRef.overlayElement, origin)) {
          break;
        }
        const outsidePointerEvents = overlayRef._outsidePointerEvents;
        if (this._ngZone) {
          this._ngZone.run(() => outsidePointerEvents.next(event));
        } else {
          outsidePointerEvents.next(event);
        }
      }
    };
  }
  /** Add a new overlay to the list of attached overlay refs. */
  add(overlayRef) {
    super.add(overlayRef);
    if (!this._isAttached) {
      const body = this._document.body;
      if (this._ngZone) {
        this._ngZone.runOutsideAngular(() => this._addEventListeners(body));
      } else {
        this._addEventListeners(body);
      }
      if (this._platform.IOS && !this._cursorStyleIsSet) {
        this._cursorOriginalValue = body.style.cursor;
        body.style.cursor = "pointer";
        this._cursorStyleIsSet = true;
      }
      this._isAttached = true;
    }
  }
  /** Detaches the global keyboard event listener. */
  detach() {
    if (this._isAttached) {
      const body = this._document.body;
      body.removeEventListener("pointerdown", this._pointerDownListener, true);
      body.removeEventListener("click", this._clickListener, true);
      body.removeEventListener("auxclick", this._clickListener, true);
      body.removeEventListener("contextmenu", this._clickListener, true);
      if (this._platform.IOS && this._cursorStyleIsSet) {
        body.style.cursor = this._cursorOriginalValue;
        this._cursorStyleIsSet = false;
      }
      this._isAttached = false;
    }
  }
  _addEventListeners(body) {
    body.addEventListener("pointerdown", this._pointerDownListener, true);
    body.addEventListener("click", this._clickListener, true);
    body.addEventListener("auxclick", this._clickListener, true);
    body.addEventListener("contextmenu", this._clickListener, true);
  }
  static {
    this.ɵfac = function OverlayOutsideClickDispatcher_Factory(t) {
      return new (t || _OverlayOutsideClickDispatcher)(ɵɵinject(DOCUMENT), ɵɵinject(Platform), ɵɵinject(NgZone, 8));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OverlayOutsideClickDispatcher,
      factory: _OverlayOutsideClickDispatcher.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayOutsideClickDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Platform
  }, {
    type: NgZone,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
function containsPierceShadowDom(parent, child) {
  const supportsShadowRoot = typeof ShadowRoot !== "undefined" && ShadowRoot;
  let current = child;
  while (current) {
    if (current === parent) {
      return true;
    }
    current = supportsShadowRoot && current instanceof ShadowRoot ? current.host : current.parentNode;
  }
  return false;
}
var OverlayContainer = class _OverlayContainer {
  constructor(document2, _platform) {
    this._platform = _platform;
    this._document = document2;
  }
  ngOnDestroy() {
    this._containerElement?.remove();
  }
  /**
   * This method returns the overlay container element. It will lazily
   * create the element the first time it is called to facilitate using
   * the container in non-browser environments.
   * @returns the container element
   */
  getContainerElement() {
    if (!this._containerElement) {
      this._createContainer();
    }
    return this._containerElement;
  }
  /**
   * Create the overlay container element, which is simply a div
   * with the 'cdk-overlay-container' class on the document body.
   */
  _createContainer() {
    const containerClass = "cdk-overlay-container";
    if (this._platform.isBrowser || _isTestEnvironment()) {
      const oppositePlatformContainers = this._document.querySelectorAll(`.${containerClass}[platform="server"], .${containerClass}[platform="test"]`);
      for (let i = 0; i < oppositePlatformContainers.length; i++) {
        oppositePlatformContainers[i].remove();
      }
    }
    const container = this._document.createElement("div");
    container.classList.add(containerClass);
    if (_isTestEnvironment()) {
      container.setAttribute("platform", "test");
    } else if (!this._platform.isBrowser) {
      container.setAttribute("platform", "server");
    }
    this._document.body.appendChild(container);
    this._containerElement = container;
  }
  static {
    this.ɵfac = function OverlayContainer_Factory(t) {
      return new (t || _OverlayContainer)(ɵɵinject(DOCUMENT), ɵɵinject(Platform));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OverlayContainer,
      factory: _OverlayContainer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayContainer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Platform
  }], null);
})();
var OverlayRef = class {
  constructor(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document, _location, _outsideClickDispatcher, _animationsDisabled = false, _injector) {
    this._portalOutlet = _portalOutlet;
    this._host = _host;
    this._pane = _pane;
    this._config = _config;
    this._ngZone = _ngZone;
    this._keyboardDispatcher = _keyboardDispatcher;
    this._document = _document;
    this._location = _location;
    this._outsideClickDispatcher = _outsideClickDispatcher;
    this._animationsDisabled = _animationsDisabled;
    this._injector = _injector;
    this._backdropElement = null;
    this._backdropClick = new Subject();
    this._attachments = new Subject();
    this._detachments = new Subject();
    this._locationChanges = Subscription.EMPTY;
    this._backdropClickHandler = (event) => this._backdropClick.next(event);
    this._backdropTransitionendHandler = (event) => {
      this._disposeBackdrop(event.target);
    };
    this._keydownEvents = new Subject();
    this._outsidePointerEvents = new Subject();
    this._renders = new Subject();
    if (_config.scrollStrategy) {
      this._scrollStrategy = _config.scrollStrategy;
      this._scrollStrategy.attach(this);
    }
    this._positionStrategy = _config.positionStrategy;
    this._afterRenderRef = untracked(() => afterRender(() => {
      this._renders.next();
    }, {
      injector: this._injector
    }));
  }
  /** The overlay's HTML element */
  get overlayElement() {
    return this._pane;
  }
  /** The overlay's backdrop HTML element. */
  get backdropElement() {
    return this._backdropElement;
  }
  /**
   * Wrapper around the panel element. Can be used for advanced
   * positioning where a wrapper with specific styling is
   * required around the overlay pane.
   */
  get hostElement() {
    return this._host;
  }
  /**
   * Attaches content, given via a Portal, to the overlay.
   * If the overlay is configured to have a backdrop, it will be created.
   *
   * @param portal Portal instance to which to attach the overlay.
   * @returns The portal attachment result.
   */
  attach(portal) {
    if (!this._host.parentElement && this._previousHostParent) {
      this._previousHostParent.appendChild(this._host);
    }
    const attachResult = this._portalOutlet.attach(portal);
    if (this._positionStrategy) {
      this._positionStrategy.attach(this);
    }
    this._updateStackingOrder();
    this._updateElementSize();
    this._updateElementDirection();
    if (this._scrollStrategy) {
      this._scrollStrategy.enable();
    }
    this._afterNextRenderRef?.destroy();
    this._afterNextRenderRef = afterNextRender(() => {
      if (this.hasAttached()) {
        this.updatePosition();
      }
    }, {
      injector: this._injector
    });
    this._togglePointerEvents(true);
    if (this._config.hasBackdrop) {
      this._attachBackdrop();
    }
    if (this._config.panelClass) {
      this._toggleClasses(this._pane, this._config.panelClass, true);
    }
    this._attachments.next();
    this._keyboardDispatcher.add(this);
    if (this._config.disposeOnNavigation) {
      this._locationChanges = this._location.subscribe(() => this.dispose());
    }
    this._outsideClickDispatcher.add(this);
    if (typeof attachResult?.onDestroy === "function") {
      attachResult.onDestroy(() => {
        if (this.hasAttached()) {
          this._ngZone.runOutsideAngular(() => Promise.resolve().then(() => this.detach()));
        }
      });
    }
    return attachResult;
  }
  /**
   * Detaches an overlay from a portal.
   * @returns The portal detachment result.
   */
  detach() {
    if (!this.hasAttached()) {
      return;
    }
    this.detachBackdrop();
    this._togglePointerEvents(false);
    if (this._positionStrategy && this._positionStrategy.detach) {
      this._positionStrategy.detach();
    }
    if (this._scrollStrategy) {
      this._scrollStrategy.disable();
    }
    const detachmentResult = this._portalOutlet.detach();
    this._detachments.next();
    this._keyboardDispatcher.remove(this);
    this._detachContentWhenEmpty();
    this._locationChanges.unsubscribe();
    this._outsideClickDispatcher.remove(this);
    return detachmentResult;
  }
  /** Cleans up the overlay from the DOM. */
  dispose() {
    const isAttached = this.hasAttached();
    if (this._positionStrategy) {
      this._positionStrategy.dispose();
    }
    this._disposeScrollStrategy();
    this._disposeBackdrop(this._backdropElement);
    this._locationChanges.unsubscribe();
    this._keyboardDispatcher.remove(this);
    this._portalOutlet.dispose();
    this._attachments.complete();
    this._backdropClick.complete();
    this._keydownEvents.complete();
    this._outsidePointerEvents.complete();
    this._outsideClickDispatcher.remove(this);
    this._host?.remove();
    this._afterNextRenderRef?.destroy();
    this._previousHostParent = this._pane = this._host = null;
    if (isAttached) {
      this._detachments.next();
    }
    this._detachments.complete();
    this._afterRenderRef.destroy();
    this._renders.complete();
  }
  /** Whether the overlay has attached content. */
  hasAttached() {
    return this._portalOutlet.hasAttached();
  }
  /** Gets an observable that emits when the backdrop has been clicked. */
  backdropClick() {
    return this._backdropClick;
  }
  /** Gets an observable that emits when the overlay has been attached. */
  attachments() {
    return this._attachments;
  }
  /** Gets an observable that emits when the overlay has been detached. */
  detachments() {
    return this._detachments;
  }
  /** Gets an observable of keydown events targeted to this overlay. */
  keydownEvents() {
    return this._keydownEvents;
  }
  /** Gets an observable of pointer events targeted outside this overlay. */
  outsidePointerEvents() {
    return this._outsidePointerEvents;
  }
  /** Gets the current overlay configuration, which is immutable. */
  getConfig() {
    return this._config;
  }
  /** Updates the position of the overlay based on the position strategy. */
  updatePosition() {
    if (this._positionStrategy) {
      this._positionStrategy.apply();
    }
  }
  /** Switches to a new position strategy and updates the overlay position. */
  updatePositionStrategy(strategy) {
    if (strategy === this._positionStrategy) {
      return;
    }
    if (this._positionStrategy) {
      this._positionStrategy.dispose();
    }
    this._positionStrategy = strategy;
    if (this.hasAttached()) {
      strategy.attach(this);
      this.updatePosition();
    }
  }
  /** Update the size properties of the overlay. */
  updateSize(sizeConfig) {
    this._config = __spreadValues(__spreadValues({}, this._config), sizeConfig);
    this._updateElementSize();
  }
  /** Sets the LTR/RTL direction for the overlay. */
  setDirection(dir) {
    this._config = __spreadProps(__spreadValues({}, this._config), {
      direction: dir
    });
    this._updateElementDirection();
  }
  /** Add a CSS class or an array of classes to the overlay pane. */
  addPanelClass(classes) {
    if (this._pane) {
      this._toggleClasses(this._pane, classes, true);
    }
  }
  /** Remove a CSS class or an array of classes from the overlay pane. */
  removePanelClass(classes) {
    if (this._pane) {
      this._toggleClasses(this._pane, classes, false);
    }
  }
  /**
   * Returns the layout direction of the overlay panel.
   */
  getDirection() {
    const direction = this._config.direction;
    if (!direction) {
      return "ltr";
    }
    return typeof direction === "string" ? direction : direction.value;
  }
  /** Switches to a new scroll strategy. */
  updateScrollStrategy(strategy) {
    if (strategy === this._scrollStrategy) {
      return;
    }
    this._disposeScrollStrategy();
    this._scrollStrategy = strategy;
    if (this.hasAttached()) {
      strategy.attach(this);
      strategy.enable();
    }
  }
  /** Updates the text direction of the overlay panel. */
  _updateElementDirection() {
    this._host.setAttribute("dir", this.getDirection());
  }
  /** Updates the size of the overlay element based on the overlay config. */
  _updateElementSize() {
    if (!this._pane) {
      return;
    }
    const style = this._pane.style;
    style.width = coerceCssPixelValue(this._config.width);
    style.height = coerceCssPixelValue(this._config.height);
    style.minWidth = coerceCssPixelValue(this._config.minWidth);
    style.minHeight = coerceCssPixelValue(this._config.minHeight);
    style.maxWidth = coerceCssPixelValue(this._config.maxWidth);
    style.maxHeight = coerceCssPixelValue(this._config.maxHeight);
  }
  /** Toggles the pointer events for the overlay pane element. */
  _togglePointerEvents(enablePointer) {
    this._pane.style.pointerEvents = enablePointer ? "" : "none";
  }
  /** Attaches a backdrop for this overlay. */
  _attachBackdrop() {
    const showingClass = "cdk-overlay-backdrop-showing";
    this._backdropElement = this._document.createElement("div");
    this._backdropElement.classList.add("cdk-overlay-backdrop");
    if (this._animationsDisabled) {
      this._backdropElement.classList.add("cdk-overlay-backdrop-noop-animation");
    }
    if (this._config.backdropClass) {
      this._toggleClasses(this._backdropElement, this._config.backdropClass, true);
    }
    this._host.parentElement.insertBefore(this._backdropElement, this._host);
    this._backdropElement.addEventListener("click", this._backdropClickHandler);
    if (!this._animationsDisabled && typeof requestAnimationFrame !== "undefined") {
      this._ngZone.runOutsideAngular(() => {
        requestAnimationFrame(() => {
          if (this._backdropElement) {
            this._backdropElement.classList.add(showingClass);
          }
        });
      });
    } else {
      this._backdropElement.classList.add(showingClass);
    }
  }
  /**
   * Updates the stacking order of the element, moving it to the top if necessary.
   * This is required in cases where one overlay was detached, while another one,
   * that should be behind it, was destroyed. The next time both of them are opened,
   * the stacking will be wrong, because the detached element's pane will still be
   * in its original DOM position.
   */
  _updateStackingOrder() {
    if (this._host.nextSibling) {
      this._host.parentNode.appendChild(this._host);
    }
  }
  /** Detaches the backdrop (if any) associated with the overlay. */
  detachBackdrop() {
    const backdropToDetach = this._backdropElement;
    if (!backdropToDetach) {
      return;
    }
    if (this._animationsDisabled) {
      this._disposeBackdrop(backdropToDetach);
      return;
    }
    backdropToDetach.classList.remove("cdk-overlay-backdrop-showing");
    this._ngZone.runOutsideAngular(() => {
      backdropToDetach.addEventListener("transitionend", this._backdropTransitionendHandler);
    });
    backdropToDetach.style.pointerEvents = "none";
    this._backdropTimeout = this._ngZone.runOutsideAngular(() => setTimeout(() => {
      this._disposeBackdrop(backdropToDetach);
    }, 500));
  }
  /** Toggles a single CSS class or an array of classes on an element. */
  _toggleClasses(element, cssClasses, isAdd) {
    const classes = coerceArray(cssClasses || []).filter((c) => !!c);
    if (classes.length) {
      isAdd ? element.classList.add(...classes) : element.classList.remove(...classes);
    }
  }
  /** Detaches the overlay content next time the zone stabilizes. */
  _detachContentWhenEmpty() {
    this._ngZone.runOutsideAngular(() => {
      const subscription = this._renders.pipe(takeUntil(merge(this._attachments, this._detachments))).subscribe(() => {
        if (!this._pane || !this._host || this._pane.children.length === 0) {
          if (this._pane && this._config.panelClass) {
            this._toggleClasses(this._pane, this._config.panelClass, false);
          }
          if (this._host && this._host.parentElement) {
            this._previousHostParent = this._host.parentElement;
            this._host.remove();
          }
          subscription.unsubscribe();
        }
      });
    });
  }
  /** Disposes of a scroll strategy. */
  _disposeScrollStrategy() {
    const scrollStrategy = this._scrollStrategy;
    if (scrollStrategy) {
      scrollStrategy.disable();
      if (scrollStrategy.detach) {
        scrollStrategy.detach();
      }
    }
  }
  /** Removes a backdrop element from the DOM. */
  _disposeBackdrop(backdrop) {
    if (backdrop) {
      backdrop.removeEventListener("click", this._backdropClickHandler);
      backdrop.removeEventListener("transitionend", this._backdropTransitionendHandler);
      backdrop.remove();
      if (this._backdropElement === backdrop) {
        this._backdropElement = null;
      }
    }
    if (this._backdropTimeout) {
      clearTimeout(this._backdropTimeout);
      this._backdropTimeout = void 0;
    }
  }
};
var boundingBoxClass = "cdk-overlay-connected-position-bounding-box";
var cssUnitPattern = /([A-Za-z%]+)$/;
var FlexibleConnectedPositionStrategy = class {
  /** Ordered list of preferred positions, from most to least desirable. */
  get positions() {
    return this._preferredPositions;
  }
  constructor(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
    this._viewportRuler = _viewportRuler;
    this._document = _document;
    this._platform = _platform;
    this._overlayContainer = _overlayContainer;
    this._lastBoundingBoxSize = {
      width: 0,
      height: 0
    };
    this._isPushed = false;
    this._canPush = true;
    this._growAfterOpen = false;
    this._hasFlexibleDimensions = true;
    this._positionLocked = false;
    this._viewportMargin = 0;
    this._scrollables = [];
    this._preferredPositions = [];
    this._positionChanges = new Subject();
    this._resizeSubscription = Subscription.EMPTY;
    this._offsetX = 0;
    this._offsetY = 0;
    this._appliedPanelClasses = [];
    this.positionChanges = this._positionChanges;
    this.setOrigin(connectedTo);
  }
  /** Attaches this position strategy to an overlay. */
  attach(overlayRef) {
    if (this._overlayRef && overlayRef !== this._overlayRef && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("This position strategy is already attached to an overlay");
    }
    this._validatePositions();
    overlayRef.hostElement.classList.add(boundingBoxClass);
    this._overlayRef = overlayRef;
    this._boundingBox = overlayRef.hostElement;
    this._pane = overlayRef.overlayElement;
    this._isDisposed = false;
    this._isInitialRender = true;
    this._lastPosition = null;
    this._resizeSubscription.unsubscribe();
    this._resizeSubscription = this._viewportRuler.change().subscribe(() => {
      this._isInitialRender = true;
      this.apply();
    });
  }
  /**
   * Updates the position of the overlay element, using whichever preferred position relative
   * to the origin best fits on-screen.
   *
   * The selection of a position goes as follows:
   *  - If any positions fit completely within the viewport as-is,
   *      choose the first position that does so.
   *  - If flexible dimensions are enabled and at least one satisfies the given minimum width/height,
   *      choose the position with the greatest available size modified by the positions' weight.
   *  - If pushing is enabled, take the position that went off-screen the least and push it
   *      on-screen.
   *  - If none of the previous criteria were met, use the position that goes off-screen the least.
   * @docs-private
   */
  apply() {
    if (this._isDisposed || !this._platform.isBrowser) {
      return;
    }
    if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
      this.reapplyLastPosition();
      return;
    }
    this._clearPanelClasses();
    this._resetOverlayElementStyles();
    this._resetBoundingBoxStyles();
    this._viewportRect = this._getNarrowedViewportRect();
    this._originRect = this._getOriginRect();
    this._overlayRect = this._pane.getBoundingClientRect();
    this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
    const originRect = this._originRect;
    const overlayRect = this._overlayRect;
    const viewportRect = this._viewportRect;
    const containerRect = this._containerRect;
    const flexibleFits = [];
    let fallback;
    for (let pos of this._preferredPositions) {
      let originPoint = this._getOriginPoint(originRect, containerRect, pos);
      let overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos);
      let overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos);
      if (overlayFit.isCompletelyWithinViewport) {
        this._isPushed = false;
        this._applyPosition(pos, originPoint);
        return;
      }
      if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
        flexibleFits.push({
          position: pos,
          origin: originPoint,
          overlayRect,
          boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
        });
        continue;
      }
      if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) {
        fallback = {
          overlayFit,
          overlayPoint,
          originPoint,
          position: pos,
          overlayRect
        };
      }
    }
    if (flexibleFits.length) {
      let bestFit = null;
      let bestScore = -1;
      for (const fit of flexibleFits) {
        const score = fit.boundingBoxRect.width * fit.boundingBoxRect.height * (fit.position.weight || 1);
        if (score > bestScore) {
          bestScore = score;
          bestFit = fit;
        }
      }
      this._isPushed = false;
      this._applyPosition(bestFit.position, bestFit.origin);
      return;
    }
    if (this._canPush) {
      this._isPushed = true;
      this._applyPosition(fallback.position, fallback.originPoint);
      return;
    }
    this._applyPosition(fallback.position, fallback.originPoint);
  }
  detach() {
    this._clearPanelClasses();
    this._lastPosition = null;
    this._previousPushAmount = null;
    this._resizeSubscription.unsubscribe();
  }
  /** Cleanup after the element gets destroyed. */
  dispose() {
    if (this._isDisposed) {
      return;
    }
    if (this._boundingBox) {
      extendStyles(this._boundingBox.style, {
        top: "",
        left: "",
        right: "",
        bottom: "",
        height: "",
        width: "",
        alignItems: "",
        justifyContent: ""
      });
    }
    if (this._pane) {
      this._resetOverlayElementStyles();
    }
    if (this._overlayRef) {
      this._overlayRef.hostElement.classList.remove(boundingBoxClass);
    }
    this.detach();
    this._positionChanges.complete();
    this._overlayRef = this._boundingBox = null;
    this._isDisposed = true;
  }
  /**
   * This re-aligns the overlay element with the trigger in its last calculated position,
   * even if a position higher in the "preferred positions" list would now fit. This
   * allows one to re-align the panel without changing the orientation of the panel.
   */
  reapplyLastPosition() {
    if (this._isDisposed || !this._platform.isBrowser) {
      return;
    }
    const lastPosition = this._lastPosition;
    if (lastPosition) {
      this._originRect = this._getOriginRect();
      this._overlayRect = this._pane.getBoundingClientRect();
      this._viewportRect = this._getNarrowedViewportRect();
      this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
      const originPoint = this._getOriginPoint(this._originRect, this._containerRect, lastPosition);
      this._applyPosition(lastPosition, originPoint);
    } else {
      this.apply();
    }
  }
  /**
   * Sets the list of Scrollable containers that host the origin element so that
   * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
   * Scrollable must be an ancestor element of the strategy's origin element.
   */
  withScrollableContainers(scrollables) {
    this._scrollables = scrollables;
    return this;
  }
  /**
   * Adds new preferred positions.
   * @param positions List of positions options for this overlay.
   */
  withPositions(positions) {
    this._preferredPositions = positions;
    if (positions.indexOf(this._lastPosition) === -1) {
      this._lastPosition = null;
    }
    this._validatePositions();
    return this;
  }
  /**
   * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
   * @param margin Required margin between the overlay and the viewport edge in pixels.
   */
  withViewportMargin(margin) {
    this._viewportMargin = margin;
    return this;
  }
  /** Sets whether the overlay's width and height can be constrained to fit within the viewport. */
  withFlexibleDimensions(flexibleDimensions = true) {
    this._hasFlexibleDimensions = flexibleDimensions;
    return this;
  }
  /** Sets whether the overlay can grow after the initial open via flexible width/height. */
  withGrowAfterOpen(growAfterOpen = true) {
    this._growAfterOpen = growAfterOpen;
    return this;
  }
  /** Sets whether the overlay can be pushed on-screen if none of the provided positions fit. */
  withPush(canPush = true) {
    this._canPush = canPush;
    return this;
  }
  /**
   * Sets whether the overlay's position should be locked in after it is positioned
   * initially. When an overlay is locked in, it won't attempt to reposition itself
   * when the position is re-applied (e.g. when the user scrolls away).
   * @param isLocked Whether the overlay should locked in.
   */
  withLockedPosition(isLocked = true) {
    this._positionLocked = isLocked;
    return this;
  }
  /**
   * Sets the origin, relative to which to position the overlay.
   * Using an element origin is useful for building components that need to be positioned
   * relatively to a trigger (e.g. dropdown menus or tooltips), whereas using a point can be
   * used for cases like contextual menus which open relative to the user's pointer.
   * @param origin Reference to the new origin.
   */
  setOrigin(origin) {
    this._origin = origin;
    return this;
  }
  /**
   * Sets the default offset for the overlay's connection point on the x-axis.
   * @param offset New offset in the X axis.
   */
  withDefaultOffsetX(offset) {
    this._offsetX = offset;
    return this;
  }
  /**
   * Sets the default offset for the overlay's connection point on the y-axis.
   * @param offset New offset in the Y axis.
   */
  withDefaultOffsetY(offset) {
    this._offsetY = offset;
    return this;
  }
  /**
   * Configures that the position strategy should set a `transform-origin` on some elements
   * inside the overlay, depending on the current position that is being applied. This is
   * useful for the cases where the origin of an animation can change depending on the
   * alignment of the overlay.
   * @param selector CSS selector that will be used to find the target
   *    elements onto which to set the transform origin.
   */
  withTransformOriginOn(selector) {
    this._transformOriginSelector = selector;
    return this;
  }
  /**
   * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
   */
  _getOriginPoint(originRect, containerRect, pos) {
    let x;
    if (pos.originX == "center") {
      x = originRect.left + originRect.width / 2;
    } else {
      const startX = this._isRtl() ? originRect.right : originRect.left;
      const endX = this._isRtl() ? originRect.left : originRect.right;
      x = pos.originX == "start" ? startX : endX;
    }
    if (containerRect.left < 0) {
      x -= containerRect.left;
    }
    let y;
    if (pos.originY == "center") {
      y = originRect.top + originRect.height / 2;
    } else {
      y = pos.originY == "top" ? originRect.top : originRect.bottom;
    }
    if (containerRect.top < 0) {
      y -= containerRect.top;
    }
    return {
      x,
      y
    };
  }
  /**
   * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
   * origin point to which the overlay should be connected.
   */
  _getOverlayPoint(originPoint, overlayRect, pos) {
    let overlayStartX;
    if (pos.overlayX == "center") {
      overlayStartX = -overlayRect.width / 2;
    } else if (pos.overlayX === "start") {
      overlayStartX = this._isRtl() ? -overlayRect.width : 0;
    } else {
      overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
    }
    let overlayStartY;
    if (pos.overlayY == "center") {
      overlayStartY = -overlayRect.height / 2;
    } else {
      overlayStartY = pos.overlayY == "top" ? 0 : -overlayRect.height;
    }
    return {
      x: originPoint.x + overlayStartX,
      y: originPoint.y + overlayStartY
    };
  }
  /** Gets how well an overlay at the given point will fit within the viewport. */
  _getOverlayFit(point, rawOverlayRect, viewport, position) {
    const overlay = getRoundedBoundingClientRect(rawOverlayRect);
    let {
      x,
      y
    } = point;
    let offsetX = this._getOffset(position, "x");
    let offsetY = this._getOffset(position, "y");
    if (offsetX) {
      x += offsetX;
    }
    if (offsetY) {
      y += offsetY;
    }
    let leftOverflow = 0 - x;
    let rightOverflow = x + overlay.width - viewport.width;
    let topOverflow = 0 - y;
    let bottomOverflow = y + overlay.height - viewport.height;
    let visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);
    let visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);
    let visibleArea = visibleWidth * visibleHeight;
    return {
      visibleArea,
      isCompletelyWithinViewport: overlay.width * overlay.height === visibleArea,
      fitsInViewportVertically: visibleHeight === overlay.height,
      fitsInViewportHorizontally: visibleWidth == overlay.width
    };
  }
  /**
   * Whether the overlay can fit within the viewport when it may resize either its width or height.
   * @param fit How well the overlay fits in the viewport at some position.
   * @param point The (x, y) coordinates of the overlay at some position.
   * @param viewport The geometry of the viewport.
   */
  _canFitWithFlexibleDimensions(fit, point, viewport) {
    if (this._hasFlexibleDimensions) {
      const availableHeight = viewport.bottom - point.y;
      const availableWidth = viewport.right - point.x;
      const minHeight = getPixelValue(this._overlayRef.getConfig().minHeight);
      const minWidth = getPixelValue(this._overlayRef.getConfig().minWidth);
      const verticalFit = fit.fitsInViewportVertically || minHeight != null && minHeight <= availableHeight;
      const horizontalFit = fit.fitsInViewportHorizontally || minWidth != null && minWidth <= availableWidth;
      return verticalFit && horizontalFit;
    }
    return false;
  }
  /**
   * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
   * the viewport, the top-left corner will be pushed on-screen (with overflow occurring on the
   * right and bottom).
   *
   * @param start Starting point from which the overlay is pushed.
   * @param rawOverlayRect Dimensions of the overlay.
   * @param scrollPosition Current viewport scroll position.
   * @returns The point at which to position the overlay after pushing. This is effectively a new
   *     originPoint.
   */
  _pushOverlayOnScreen(start, rawOverlayRect, scrollPosition) {
    if (this._previousPushAmount && this._positionLocked) {
      return {
        x: start.x + this._previousPushAmount.x,
        y: start.y + this._previousPushAmount.y
      };
    }
    const overlay = getRoundedBoundingClientRect(rawOverlayRect);
    const viewport = this._viewportRect;
    const overflowRight = Math.max(start.x + overlay.width - viewport.width, 0);
    const overflowBottom = Math.max(start.y + overlay.height - viewport.height, 0);
    const overflowTop = Math.max(viewport.top - scrollPosition.top - start.y, 0);
    const overflowLeft = Math.max(viewport.left - scrollPosition.left - start.x, 0);
    let pushX = 0;
    let pushY = 0;
    if (overlay.width <= viewport.width) {
      pushX = overflowLeft || -overflowRight;
    } else {
      pushX = start.x < this._viewportMargin ? viewport.left - scrollPosition.left - start.x : 0;
    }
    if (overlay.height <= viewport.height) {
      pushY = overflowTop || -overflowBottom;
    } else {
      pushY = start.y < this._viewportMargin ? viewport.top - scrollPosition.top - start.y : 0;
    }
    this._previousPushAmount = {
      x: pushX,
      y: pushY
    };
    return {
      x: start.x + pushX,
      y: start.y + pushY
    };
  }
  /**
   * Applies a computed position to the overlay and emits a position change.
   * @param position The position preference
   * @param originPoint The point on the origin element where the overlay is connected.
   */
  _applyPosition(position, originPoint) {
    this._setTransformOrigin(position);
    this._setOverlayElementStyles(originPoint, position);
    this._setBoundingBoxStyles(originPoint, position);
    if (position.panelClass) {
      this._addPanelClasses(position.panelClass);
    }
    if (this._positionChanges.observers.length) {
      const scrollVisibility = this._getScrollVisibility();
      if (position !== this._lastPosition || !this._lastScrollVisibility || !compareScrollVisibility(this._lastScrollVisibility, scrollVisibility)) {
        const changeEvent = new ConnectedOverlayPositionChange(position, scrollVisibility);
        this._positionChanges.next(changeEvent);
      }
      this._lastScrollVisibility = scrollVisibility;
    }
    this._lastPosition = position;
    this._isInitialRender = false;
  }
  /** Sets the transform origin based on the configured selector and the passed-in position.  */
  _setTransformOrigin(position) {
    if (!this._transformOriginSelector) {
      return;
    }
    const elements = this._boundingBox.querySelectorAll(this._transformOriginSelector);
    let xOrigin;
    let yOrigin = position.overlayY;
    if (position.overlayX === "center") {
      xOrigin = "center";
    } else if (this._isRtl()) {
      xOrigin = position.overlayX === "start" ? "right" : "left";
    } else {
      xOrigin = position.overlayX === "start" ? "left" : "right";
    }
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.transformOrigin = `${xOrigin} ${yOrigin}`;
    }
  }
  /**
   * Gets the position and size of the overlay's sizing container.
   *
   * This method does no measuring and applies no styles so that we can cheaply compute the
   * bounds for all positions and choose the best fit based on these results.
   */
  _calculateBoundingBoxRect(origin, position) {
    const viewport = this._viewportRect;
    const isRtl = this._isRtl();
    let height, top, bottom;
    if (position.overlayY === "top") {
      top = origin.y;
      height = viewport.height - top + this._viewportMargin;
    } else if (position.overlayY === "bottom") {
      bottom = viewport.height - origin.y + this._viewportMargin * 2;
      height = viewport.height - bottom + this._viewportMargin;
    } else {
      const smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y + viewport.top, origin.y);
      const previousHeight = this._lastBoundingBoxSize.height;
      height = smallestDistanceToViewportEdge * 2;
      top = origin.y - smallestDistanceToViewportEdge;
      if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) {
        top = origin.y - previousHeight / 2;
      }
    }
    const isBoundedByRightViewportEdge = position.overlayX === "start" && !isRtl || position.overlayX === "end" && isRtl;
    const isBoundedByLeftViewportEdge = position.overlayX === "end" && !isRtl || position.overlayX === "start" && isRtl;
    let width, left, right;
    if (isBoundedByLeftViewportEdge) {
      right = viewport.width - origin.x + this._viewportMargin * 2;
      width = origin.x - this._viewportMargin;
    } else if (isBoundedByRightViewportEdge) {
      left = origin.x;
      width = viewport.right - origin.x;
    } else {
      const smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x + viewport.left, origin.x);
      const previousWidth = this._lastBoundingBoxSize.width;
      width = smallestDistanceToViewportEdge * 2;
      left = origin.x - smallestDistanceToViewportEdge;
      if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) {
        left = origin.x - previousWidth / 2;
      }
    }
    return {
      top,
      left,
      bottom,
      right,
      width,
      height
    };
  }
  /**
   * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
   * origin's connection point and stretches to the bounds of the viewport.
   *
   * @param origin The point on the origin element where the overlay is connected.
   * @param position The position preference
   */
  _setBoundingBoxStyles(origin, position) {
    const boundingBoxRect = this._calculateBoundingBoxRect(origin, position);
    if (!this._isInitialRender && !this._growAfterOpen) {
      boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
      boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
    }
    const styles = {};
    if (this._hasExactPosition()) {
      styles.top = styles.left = "0";
      styles.bottom = styles.right = styles.maxHeight = styles.maxWidth = "";
      styles.width = styles.height = "100%";
    } else {
      const maxHeight = this._overlayRef.getConfig().maxHeight;
      const maxWidth = this._overlayRef.getConfig().maxWidth;
      styles.height = coerceCssPixelValue(boundingBoxRect.height);
      styles.top = coerceCssPixelValue(boundingBoxRect.top);
      styles.bottom = coerceCssPixelValue(boundingBoxRect.bottom);
      styles.width = coerceCssPixelValue(boundingBoxRect.width);
      styles.left = coerceCssPixelValue(boundingBoxRect.left);
      styles.right = coerceCssPixelValue(boundingBoxRect.right);
      if (position.overlayX === "center") {
        styles.alignItems = "center";
      } else {
        styles.alignItems = position.overlayX === "end" ? "flex-end" : "flex-start";
      }
      if (position.overlayY === "center") {
        styles.justifyContent = "center";
      } else {
        styles.justifyContent = position.overlayY === "bottom" ? "flex-end" : "flex-start";
      }
      if (maxHeight) {
        styles.maxHeight = coerceCssPixelValue(maxHeight);
      }
      if (maxWidth) {
        styles.maxWidth = coerceCssPixelValue(maxWidth);
      }
    }
    this._lastBoundingBoxSize = boundingBoxRect;
    extendStyles(this._boundingBox.style, styles);
  }
  /** Resets the styles for the bounding box so that a new positioning can be computed. */
  _resetBoundingBoxStyles() {
    extendStyles(this._boundingBox.style, {
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      height: "",
      width: "",
      alignItems: "",
      justifyContent: ""
    });
  }
  /** Resets the styles for the overlay pane so that a new positioning can be computed. */
  _resetOverlayElementStyles() {
    extendStyles(this._pane.style, {
      top: "",
      left: "",
      bottom: "",
      right: "",
      position: "",
      transform: ""
    });
  }
  /** Sets positioning styles to the overlay element. */
  _setOverlayElementStyles(originPoint, position) {
    const styles = {};
    const hasExactPosition = this._hasExactPosition();
    const hasFlexibleDimensions = this._hasFlexibleDimensions;
    const config = this._overlayRef.getConfig();
    if (hasExactPosition) {
      const scrollPosition = this._viewportRuler.getViewportScrollPosition();
      extendStyles(styles, this._getExactOverlayY(position, originPoint, scrollPosition));
      extendStyles(styles, this._getExactOverlayX(position, originPoint, scrollPosition));
    } else {
      styles.position = "static";
    }
    let transformString = "";
    let offsetX = this._getOffset(position, "x");
    let offsetY = this._getOffset(position, "y");
    if (offsetX) {
      transformString += `translateX(${offsetX}px) `;
    }
    if (offsetY) {
      transformString += `translateY(${offsetY}px)`;
    }
    styles.transform = transformString.trim();
    if (config.maxHeight) {
      if (hasExactPosition) {
        styles.maxHeight = coerceCssPixelValue(config.maxHeight);
      } else if (hasFlexibleDimensions) {
        styles.maxHeight = "";
      }
    }
    if (config.maxWidth) {
      if (hasExactPosition) {
        styles.maxWidth = coerceCssPixelValue(config.maxWidth);
      } else if (hasFlexibleDimensions) {
        styles.maxWidth = "";
      }
    }
    extendStyles(this._pane.style, styles);
  }
  /** Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing. */
  _getExactOverlayY(position, originPoint, scrollPosition) {
    let styles = {
      top: "",
      bottom: ""
    };
    let overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
    if (this._isPushed) {
      overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
    }
    if (position.overlayY === "bottom") {
      const documentHeight = this._document.documentElement.clientHeight;
      styles.bottom = `${documentHeight - (overlayPoint.y + this._overlayRect.height)}px`;
    } else {
      styles.top = coerceCssPixelValue(overlayPoint.y);
    }
    return styles;
  }
  /** Gets the exact left/right for the overlay when not using flexible sizing or when pushing. */
  _getExactOverlayX(position, originPoint, scrollPosition) {
    let styles = {
      left: "",
      right: ""
    };
    let overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
    if (this._isPushed) {
      overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
    }
    let horizontalStyleProperty;
    if (this._isRtl()) {
      horizontalStyleProperty = position.overlayX === "end" ? "left" : "right";
    } else {
      horizontalStyleProperty = position.overlayX === "end" ? "right" : "left";
    }
    if (horizontalStyleProperty === "right") {
      const documentWidth = this._document.documentElement.clientWidth;
      styles.right = `${documentWidth - (overlayPoint.x + this._overlayRect.width)}px`;
    } else {
      styles.left = coerceCssPixelValue(overlayPoint.x);
    }
    return styles;
  }
  /**
   * Gets the view properties of the trigger and overlay, including whether they are clipped
   * or completely outside the view of any of the strategy's scrollables.
   */
  _getScrollVisibility() {
    const originBounds = this._getOriginRect();
    const overlayBounds = this._pane.getBoundingClientRect();
    const scrollContainerBounds = this._scrollables.map((scrollable) => {
      return scrollable.getElementRef().nativeElement.getBoundingClientRect();
    });
    return {
      isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
      isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
      isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
      isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds)
    };
  }
  /** Subtracts the amount that an element is overflowing on an axis from its length. */
  _subtractOverflows(length, ...overflows) {
    return overflows.reduce((currentValue, currentOverflow) => {
      return currentValue - Math.max(currentOverflow, 0);
    }, length);
  }
  /** Narrows the given viewport rect by the current _viewportMargin. */
  _getNarrowedViewportRect() {
    const width = this._document.documentElement.clientWidth;
    const height = this._document.documentElement.clientHeight;
    const scrollPosition = this._viewportRuler.getViewportScrollPosition();
    return {
      top: scrollPosition.top + this._viewportMargin,
      left: scrollPosition.left + this._viewportMargin,
      right: scrollPosition.left + width - this._viewportMargin,
      bottom: scrollPosition.top + height - this._viewportMargin,
      width: width - 2 * this._viewportMargin,
      height: height - 2 * this._viewportMargin
    };
  }
  /** Whether the we're dealing with an RTL context */
  _isRtl() {
    return this._overlayRef.getDirection() === "rtl";
  }
  /** Determines whether the overlay uses exact or flexible positioning. */
  _hasExactPosition() {
    return !this._hasFlexibleDimensions || this._isPushed;
  }
  /** Retrieves the offset of a position along the x or y axis. */
  _getOffset(position, axis) {
    if (axis === "x") {
      return position.offsetX == null ? this._offsetX : position.offsetX;
    }
    return position.offsetY == null ? this._offsetY : position.offsetY;
  }
  /** Validates that the current position match the expected values. */
  _validatePositions() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this._preferredPositions.length) {
        throw Error("FlexibleConnectedPositionStrategy: At least one position is required.");
      }
      this._preferredPositions.forEach((pair) => {
        validateHorizontalPosition("originX", pair.originX);
        validateVerticalPosition("originY", pair.originY);
        validateHorizontalPosition("overlayX", pair.overlayX);
        validateVerticalPosition("overlayY", pair.overlayY);
      });
    }
  }
  /** Adds a single CSS class or an array of classes on the overlay panel. */
  _addPanelClasses(cssClasses) {
    if (this._pane) {
      coerceArray(cssClasses).forEach((cssClass) => {
        if (cssClass !== "" && this._appliedPanelClasses.indexOf(cssClass) === -1) {
          this._appliedPanelClasses.push(cssClass);
          this._pane.classList.add(cssClass);
        }
      });
    }
  }
  /** Clears the classes that the position strategy has applied from the overlay panel. */
  _clearPanelClasses() {
    if (this._pane) {
      this._appliedPanelClasses.forEach((cssClass) => {
        this._pane.classList.remove(cssClass);
      });
      this._appliedPanelClasses = [];
    }
  }
  /** Returns the DOMRect of the current origin. */
  _getOriginRect() {
    const origin = this._origin;
    if (origin instanceof ElementRef) {
      return origin.nativeElement.getBoundingClientRect();
    }
    if (origin instanceof Element) {
      return origin.getBoundingClientRect();
    }
    const width = origin.width || 0;
    const height = origin.height || 0;
    return {
      top: origin.y,
      bottom: origin.y + height,
      left: origin.x,
      right: origin.x + width,
      height,
      width
    };
  }
};
function extendStyles(destination, source) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      destination[key] = source[key];
    }
  }
  return destination;
}
function getPixelValue(input) {
  if (typeof input !== "number" && input != null) {
    const [value, units] = input.split(cssUnitPattern);
    return !units || units === "px" ? parseFloat(value) : null;
  }
  return input || null;
}
function getRoundedBoundingClientRect(clientRect) {
  return {
    top: Math.floor(clientRect.top),
    right: Math.floor(clientRect.right),
    bottom: Math.floor(clientRect.bottom),
    left: Math.floor(clientRect.left),
    width: Math.floor(clientRect.width),
    height: Math.floor(clientRect.height)
  };
}
function compareScrollVisibility(a, b) {
  if (a === b) {
    return true;
  }
  return a.isOriginClipped === b.isOriginClipped && a.isOriginOutsideView === b.isOriginOutsideView && a.isOverlayClipped === b.isOverlayClipped && a.isOverlayOutsideView === b.isOverlayOutsideView;
}
var wrapperClass = "cdk-global-overlay-wrapper";
var GlobalPositionStrategy = class {
  constructor() {
    this._cssPosition = "static";
    this._topOffset = "";
    this._bottomOffset = "";
    this._alignItems = "";
    this._xPosition = "";
    this._xOffset = "";
    this._width = "";
    this._height = "";
    this._isDisposed = false;
  }
  attach(overlayRef) {
    const config = overlayRef.getConfig();
    this._overlayRef = overlayRef;
    if (this._width && !config.width) {
      overlayRef.updateSize({
        width: this._width
      });
    }
    if (this._height && !config.height) {
      overlayRef.updateSize({
        height: this._height
      });
    }
    overlayRef.hostElement.classList.add(wrapperClass);
    this._isDisposed = false;
  }
  /**
   * Sets the top position of the overlay. Clears any previously set vertical position.
   * @param value New top offset.
   */
  top(value = "") {
    this._bottomOffset = "";
    this._topOffset = value;
    this._alignItems = "flex-start";
    return this;
  }
  /**
   * Sets the left position of the overlay. Clears any previously set horizontal position.
   * @param value New left offset.
   */
  left(value = "") {
    this._xOffset = value;
    this._xPosition = "left";
    return this;
  }
  /**
   * Sets the bottom position of the overlay. Clears any previously set vertical position.
   * @param value New bottom offset.
   */
  bottom(value = "") {
    this._topOffset = "";
    this._bottomOffset = value;
    this._alignItems = "flex-end";
    return this;
  }
  /**
   * Sets the right position of the overlay. Clears any previously set horizontal position.
   * @param value New right offset.
   */
  right(value = "") {
    this._xOffset = value;
    this._xPosition = "right";
    return this;
  }
  /**
   * Sets the overlay to the start of the viewport, depending on the overlay direction.
   * This will be to the left in LTR layouts and to the right in RTL.
   * @param offset Offset from the edge of the screen.
   */
  start(value = "") {
    this._xOffset = value;
    this._xPosition = "start";
    return this;
  }
  /**
   * Sets the overlay to the end of the viewport, depending on the overlay direction.
   * This will be to the right in LTR layouts and to the left in RTL.
   * @param offset Offset from the edge of the screen.
   */
  end(value = "") {
    this._xOffset = value;
    this._xPosition = "end";
    return this;
  }
  /**
   * Sets the overlay width and clears any previously set width.
   * @param value New width for the overlay
   * @deprecated Pass the `width` through the `OverlayConfig`.
   * @breaking-change 8.0.0
   */
  width(value = "") {
    if (this._overlayRef) {
      this._overlayRef.updateSize({
        width: value
      });
    } else {
      this._width = value;
    }
    return this;
  }
  /**
   * Sets the overlay height and clears any previously set height.
   * @param value New height for the overlay
   * @deprecated Pass the `height` through the `OverlayConfig`.
   * @breaking-change 8.0.0
   */
  height(value = "") {
    if (this._overlayRef) {
      this._overlayRef.updateSize({
        height: value
      });
    } else {
      this._height = value;
    }
    return this;
  }
  /**
   * Centers the overlay horizontally with an optional offset.
   * Clears any previously set horizontal position.
   *
   * @param offset Overlay offset from the horizontal center.
   */
  centerHorizontally(offset = "") {
    this.left(offset);
    this._xPosition = "center";
    return this;
  }
  /**
   * Centers the overlay vertically with an optional offset.
   * Clears any previously set vertical position.
   *
   * @param offset Overlay offset from the vertical center.
   */
  centerVertically(offset = "") {
    this.top(offset);
    this._alignItems = "center";
    return this;
  }
  /**
   * Apply the position to the element.
   * @docs-private
   */
  apply() {
    if (!this._overlayRef || !this._overlayRef.hasAttached()) {
      return;
    }
    const styles = this._overlayRef.overlayElement.style;
    const parentStyles = this._overlayRef.hostElement.style;
    const config = this._overlayRef.getConfig();
    const {
      width,
      height,
      maxWidth,
      maxHeight
    } = config;
    const shouldBeFlushHorizontally = (width === "100%" || width === "100vw") && (!maxWidth || maxWidth === "100%" || maxWidth === "100vw");
    const shouldBeFlushVertically = (height === "100%" || height === "100vh") && (!maxHeight || maxHeight === "100%" || maxHeight === "100vh");
    const xPosition = this._xPosition;
    const xOffset = this._xOffset;
    const isRtl = this._overlayRef.getConfig().direction === "rtl";
    let marginLeft = "";
    let marginRight = "";
    let justifyContent = "";
    if (shouldBeFlushHorizontally) {
      justifyContent = "flex-start";
    } else if (xPosition === "center") {
      justifyContent = "center";
      if (isRtl) {
        marginRight = xOffset;
      } else {
        marginLeft = xOffset;
      }
    } else if (isRtl) {
      if (xPosition === "left" || xPosition === "end") {
        justifyContent = "flex-end";
        marginLeft = xOffset;
      } else if (xPosition === "right" || xPosition === "start") {
        justifyContent = "flex-start";
        marginRight = xOffset;
      }
    } else if (xPosition === "left" || xPosition === "start") {
      justifyContent = "flex-start";
      marginLeft = xOffset;
    } else if (xPosition === "right" || xPosition === "end") {
      justifyContent = "flex-end";
      marginRight = xOffset;
    }
    styles.position = this._cssPosition;
    styles.marginLeft = shouldBeFlushHorizontally ? "0" : marginLeft;
    styles.marginTop = shouldBeFlushVertically ? "0" : this._topOffset;
    styles.marginBottom = this._bottomOffset;
    styles.marginRight = shouldBeFlushHorizontally ? "0" : marginRight;
    parentStyles.justifyContent = justifyContent;
    parentStyles.alignItems = shouldBeFlushVertically ? "flex-start" : this._alignItems;
  }
  /**
   * Cleans up the DOM changes from the position strategy.
   * @docs-private
   */
  dispose() {
    if (this._isDisposed || !this._overlayRef) {
      return;
    }
    const styles = this._overlayRef.overlayElement.style;
    const parent = this._overlayRef.hostElement;
    const parentStyles = parent.style;
    parent.classList.remove(wrapperClass);
    parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop = styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = "";
    this._overlayRef = null;
    this._isDisposed = true;
  }
};
var OverlayPositionBuilder = class _OverlayPositionBuilder {
  constructor(_viewportRuler, _document, _platform, _overlayContainer) {
    this._viewportRuler = _viewportRuler;
    this._document = _document;
    this._platform = _platform;
    this._overlayContainer = _overlayContainer;
  }
  /**
   * Creates a global position strategy.
   */
  global() {
    return new GlobalPositionStrategy();
  }
  /**
   * Creates a flexible position strategy.
   * @param origin Origin relative to which to position the overlay.
   */
  flexibleConnectedTo(origin) {
    return new FlexibleConnectedPositionStrategy(origin, this._viewportRuler, this._document, this._platform, this._overlayContainer);
  }
  static {
    this.ɵfac = function OverlayPositionBuilder_Factory(t) {
      return new (t || _OverlayPositionBuilder)(ɵɵinject(ViewportRuler), ɵɵinject(DOCUMENT), ɵɵinject(Platform), ɵɵinject(OverlayContainer));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OverlayPositionBuilder,
      factory: _OverlayPositionBuilder.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayPositionBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ViewportRuler
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Platform
  }, {
    type: OverlayContainer
  }], null);
})();
var nextUniqueId = 0;
var Overlay = class _Overlay {
  constructor(scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _keyboardDispatcher, _injector, _ngZone, _document, _directionality, _location, _outsideClickDispatcher, _animationsModuleType) {
    this.scrollStrategies = scrollStrategies;
    this._overlayContainer = _overlayContainer;
    this._componentFactoryResolver = _componentFactoryResolver;
    this._positionBuilder = _positionBuilder;
    this._keyboardDispatcher = _keyboardDispatcher;
    this._injector = _injector;
    this._ngZone = _ngZone;
    this._document = _document;
    this._directionality = _directionality;
    this._location = _location;
    this._outsideClickDispatcher = _outsideClickDispatcher;
    this._animationsModuleType = _animationsModuleType;
  }
  /**
   * Creates an overlay.
   * @param config Configuration applied to the overlay.
   * @returns Reference to the created overlay.
   */
  create(config) {
    const host = this._createHostElement();
    const pane = this._createPaneElement(host);
    const portalOutlet = this._createPortalOutlet(pane);
    const overlayConfig = new OverlayConfig(config);
    overlayConfig.direction = overlayConfig.direction || this._directionality.value;
    return new OverlayRef(portalOutlet, host, pane, overlayConfig, this._ngZone, this._keyboardDispatcher, this._document, this._location, this._outsideClickDispatcher, this._animationsModuleType === "NoopAnimations", this._injector.get(EnvironmentInjector));
  }
  /**
   * Gets a position builder that can be used, via fluent API,
   * to construct and configure a position strategy.
   * @returns An overlay position builder.
   */
  position() {
    return this._positionBuilder;
  }
  /**
   * Creates the DOM element for an overlay and appends it to the overlay container.
   * @returns Newly-created pane element
   */
  _createPaneElement(host) {
    const pane = this._document.createElement("div");
    pane.id = `cdk-overlay-${nextUniqueId++}`;
    pane.classList.add("cdk-overlay-pane");
    host.appendChild(pane);
    return pane;
  }
  /**
   * Creates the host element that wraps around an overlay
   * and can be used for advanced positioning.
   * @returns Newly-create host element.
   */
  _createHostElement() {
    const host = this._document.createElement("div");
    this._overlayContainer.getContainerElement().appendChild(host);
    return host;
  }
  /**
   * Create a DomPortalOutlet into which the overlay content can be loaded.
   * @param pane The DOM element to turn into a portal outlet.
   * @returns A portal outlet for the given DOM element.
   */
  _createPortalOutlet(pane) {
    if (!this._appRef) {
      this._appRef = this._injector.get(ApplicationRef);
    }
    return new DomPortalOutlet(pane, this._componentFactoryResolver, this._appRef, this._injector, this._document);
  }
  static {
    this.ɵfac = function Overlay_Factory(t) {
      return new (t || _Overlay)(ɵɵinject(ScrollStrategyOptions), ɵɵinject(OverlayContainer), ɵɵinject(ComponentFactoryResolver$1), ɵɵinject(OverlayPositionBuilder), ɵɵinject(OverlayKeyboardDispatcher), ɵɵinject(Injector), ɵɵinject(NgZone), ɵɵinject(DOCUMENT), ɵɵinject(Directionality), ɵɵinject(Location), ɵɵinject(OverlayOutsideClickDispatcher), ɵɵinject(ANIMATION_MODULE_TYPE, 8));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _Overlay,
      factory: _Overlay.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Overlay, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ScrollStrategyOptions
  }, {
    type: OverlayContainer
  }, {
    type: ComponentFactoryResolver$1
  }, {
    type: OverlayPositionBuilder
  }, {
    type: OverlayKeyboardDispatcher
  }, {
    type: Injector
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Directionality
  }, {
    type: Location
  }, {
    type: OverlayOutsideClickDispatcher
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }, {
      type: Optional
    }]
  }], null);
})();
var defaultPositionList = [{
  originX: "start",
  originY: "bottom",
  overlayX: "start",
  overlayY: "top"
}, {
  originX: "start",
  originY: "top",
  overlayX: "start",
  overlayY: "bottom"
}, {
  originX: "end",
  originY: "top",
  overlayX: "end",
  overlayY: "bottom"
}, {
  originX: "end",
  originY: "bottom",
  overlayX: "end",
  overlayY: "top"
}];
var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new InjectionToken("cdk-connected-overlay-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const overlay = inject(Overlay);
    return () => overlay.scrollStrategies.reposition();
  }
});
var CdkOverlayOrigin = class _CdkOverlayOrigin {
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
  static {
    this.ɵfac = function CdkOverlayOrigin_Factory(t) {
      return new (t || _CdkOverlayOrigin)(ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CdkOverlayOrigin,
      selectors: [["", "cdk-overlay-origin", ""], ["", "overlay-origin", ""], ["", "cdkOverlayOrigin", ""]],
      exportAs: ["cdkOverlayOrigin"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkOverlayOrigin, [{
    type: Directive,
    args: [{
      selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]",
      exportAs: "cdkOverlayOrigin",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }], null);
})();
var CdkConnectedOverlay = class _CdkConnectedOverlay {
  /** The offset in pixels for the overlay connection point on the x-axis */
  get offsetX() {
    return this._offsetX;
  }
  set offsetX(offsetX) {
    this._offsetX = offsetX;
    if (this._position) {
      this._updatePositionStrategy(this._position);
    }
  }
  /** The offset in pixels for the overlay connection point on the y-axis */
  get offsetY() {
    return this._offsetY;
  }
  set offsetY(offsetY) {
    this._offsetY = offsetY;
    if (this._position) {
      this._updatePositionStrategy(this._position);
    }
  }
  /** Whether the overlay should be disposed of when the user goes backwards/forwards in history. */
  get disposeOnNavigation() {
    return this._disposeOnNavigation;
  }
  set disposeOnNavigation(value) {
    this._disposeOnNavigation = value;
  }
  // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
  constructor(_overlay, templateRef, viewContainerRef, scrollStrategyFactory, _dir) {
    this._overlay = _overlay;
    this._dir = _dir;
    this._backdropSubscription = Subscription.EMPTY;
    this._attachSubscription = Subscription.EMPTY;
    this._detachSubscription = Subscription.EMPTY;
    this._positionSubscription = Subscription.EMPTY;
    this._disposeOnNavigation = false;
    this._ngZone = inject(NgZone);
    this.viewportMargin = 0;
    this.open = false;
    this.disableClose = false;
    this.hasBackdrop = false;
    this.lockPosition = false;
    this.flexibleDimensions = false;
    this.growAfterOpen = false;
    this.push = false;
    this.backdropClick = new EventEmitter();
    this.positionChange = new EventEmitter();
    this.attach = new EventEmitter();
    this.detach = new EventEmitter();
    this.overlayKeydown = new EventEmitter();
    this.overlayOutsideClick = new EventEmitter();
    this._templatePortal = new TemplatePortal(templateRef, viewContainerRef);
    this._scrollStrategyFactory = scrollStrategyFactory;
    this.scrollStrategy = this._scrollStrategyFactory();
  }
  /** The associated overlay reference. */
  get overlayRef() {
    return this._overlayRef;
  }
  /** The element's layout direction. */
  get dir() {
    return this._dir ? this._dir.value : "ltr";
  }
  ngOnDestroy() {
    this._attachSubscription.unsubscribe();
    this._detachSubscription.unsubscribe();
    this._backdropSubscription.unsubscribe();
    this._positionSubscription.unsubscribe();
    if (this._overlayRef) {
      this._overlayRef.dispose();
    }
  }
  ngOnChanges(changes) {
    if (this._position) {
      this._updatePositionStrategy(this._position);
      this._overlayRef.updateSize({
        width: this.width,
        minWidth: this.minWidth,
        height: this.height,
        minHeight: this.minHeight
      });
      if (changes["origin"] && this.open) {
        this._position.apply();
      }
    }
    if (changes["open"]) {
      this.open ? this._attachOverlay() : this._detachOverlay();
    }
  }
  /** Creates an overlay */
  _createOverlay() {
    if (!this.positions || !this.positions.length) {
      this.positions = defaultPositionList;
    }
    const overlayRef = this._overlayRef = this._overlay.create(this._buildConfig());
    this._attachSubscription = overlayRef.attachments().subscribe(() => this.attach.emit());
    this._detachSubscription = overlayRef.detachments().subscribe(() => this.detach.emit());
    overlayRef.keydownEvents().subscribe((event) => {
      this.overlayKeydown.next(event);
      if (event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)) {
        event.preventDefault();
        this._detachOverlay();
      }
    });
    this._overlayRef.outsidePointerEvents().subscribe((event) => {
      const origin = this._getOriginElement();
      const target = _getEventTarget(event);
      if (!origin || origin !== target && !origin.contains(target)) {
        this.overlayOutsideClick.next(event);
      }
    });
  }
  /** Builds the overlay config based on the directive's inputs */
  _buildConfig() {
    const positionStrategy = this._position = this.positionStrategy || this._createPositionStrategy();
    const overlayConfig = new OverlayConfig({
      direction: this._dir,
      positionStrategy,
      scrollStrategy: this.scrollStrategy,
      hasBackdrop: this.hasBackdrop,
      disposeOnNavigation: this.disposeOnNavigation
    });
    if (this.width || this.width === 0) {
      overlayConfig.width = this.width;
    }
    if (this.height || this.height === 0) {
      overlayConfig.height = this.height;
    }
    if (this.minWidth || this.minWidth === 0) {
      overlayConfig.minWidth = this.minWidth;
    }
    if (this.minHeight || this.minHeight === 0) {
      overlayConfig.minHeight = this.minHeight;
    }
    if (this.backdropClass) {
      overlayConfig.backdropClass = this.backdropClass;
    }
    if (this.panelClass) {
      overlayConfig.panelClass = this.panelClass;
    }
    return overlayConfig;
  }
  /** Updates the state of a position strategy, based on the values of the directive inputs. */
  _updatePositionStrategy(positionStrategy) {
    const positions = this.positions.map((currentPosition) => ({
      originX: currentPosition.originX,
      originY: currentPosition.originY,
      overlayX: currentPosition.overlayX,
      overlayY: currentPosition.overlayY,
      offsetX: currentPosition.offsetX || this.offsetX,
      offsetY: currentPosition.offsetY || this.offsetY,
      panelClass: currentPosition.panelClass || void 0
    }));
    return positionStrategy.setOrigin(this._getOrigin()).withPositions(positions).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector);
  }
  /** Returns the position strategy of the overlay to be set on the overlay config */
  _createPositionStrategy() {
    const strategy = this._overlay.position().flexibleConnectedTo(this._getOrigin());
    this._updatePositionStrategy(strategy);
    return strategy;
  }
  _getOrigin() {
    if (this.origin instanceof CdkOverlayOrigin) {
      return this.origin.elementRef;
    } else {
      return this.origin;
    }
  }
  _getOriginElement() {
    if (this.origin instanceof CdkOverlayOrigin) {
      return this.origin.elementRef.nativeElement;
    }
    if (this.origin instanceof ElementRef) {
      return this.origin.nativeElement;
    }
    if (typeof Element !== "undefined" && this.origin instanceof Element) {
      return this.origin;
    }
    return null;
  }
  /** Attaches the overlay and subscribes to backdrop clicks if backdrop exists */
  _attachOverlay() {
    if (!this._overlayRef) {
      this._createOverlay();
    } else {
      this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop;
    }
    if (!this._overlayRef.hasAttached()) {
      this._overlayRef.attach(this._templatePortal);
    }
    if (this.hasBackdrop) {
      this._backdropSubscription = this._overlayRef.backdropClick().subscribe((event) => {
        this.backdropClick.emit(event);
      });
    } else {
      this._backdropSubscription.unsubscribe();
    }
    this._positionSubscription.unsubscribe();
    if (this.positionChange.observers.length > 0) {
      this._positionSubscription = this._position.positionChanges.pipe(takeWhile(() => this.positionChange.observers.length > 0)).subscribe((position) => {
        this._ngZone.run(() => this.positionChange.emit(position));
        if (this.positionChange.observers.length === 0) {
          this._positionSubscription.unsubscribe();
        }
      });
    }
  }
  /** Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists */
  _detachOverlay() {
    if (this._overlayRef) {
      this._overlayRef.detach();
    }
    this._backdropSubscription.unsubscribe();
    this._positionSubscription.unsubscribe();
  }
  static {
    this.ɵfac = function CdkConnectedOverlay_Factory(t) {
      return new (t || _CdkConnectedOverlay)(ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY), ɵɵdirectiveInject(Directionality, 8));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CdkConnectedOverlay,
      selectors: [["", "cdk-connected-overlay", ""], ["", "connected-overlay", ""], ["", "cdkConnectedOverlay", ""]],
      inputs: {
        origin: [InputFlags.None, "cdkConnectedOverlayOrigin", "origin"],
        positions: [InputFlags.None, "cdkConnectedOverlayPositions", "positions"],
        positionStrategy: [InputFlags.None, "cdkConnectedOverlayPositionStrategy", "positionStrategy"],
        offsetX: [InputFlags.None, "cdkConnectedOverlayOffsetX", "offsetX"],
        offsetY: [InputFlags.None, "cdkConnectedOverlayOffsetY", "offsetY"],
        width: [InputFlags.None, "cdkConnectedOverlayWidth", "width"],
        height: [InputFlags.None, "cdkConnectedOverlayHeight", "height"],
        minWidth: [InputFlags.None, "cdkConnectedOverlayMinWidth", "minWidth"],
        minHeight: [InputFlags.None, "cdkConnectedOverlayMinHeight", "minHeight"],
        backdropClass: [InputFlags.None, "cdkConnectedOverlayBackdropClass", "backdropClass"],
        panelClass: [InputFlags.None, "cdkConnectedOverlayPanelClass", "panelClass"],
        viewportMargin: [InputFlags.None, "cdkConnectedOverlayViewportMargin", "viewportMargin"],
        scrollStrategy: [InputFlags.None, "cdkConnectedOverlayScrollStrategy", "scrollStrategy"],
        open: [InputFlags.None, "cdkConnectedOverlayOpen", "open"],
        disableClose: [InputFlags.None, "cdkConnectedOverlayDisableClose", "disableClose"],
        transformOriginSelector: [InputFlags.None, "cdkConnectedOverlayTransformOriginOn", "transformOriginSelector"],
        hasBackdrop: [InputFlags.HasDecoratorInputTransform, "cdkConnectedOverlayHasBackdrop", "hasBackdrop", booleanAttribute],
        lockPosition: [InputFlags.HasDecoratorInputTransform, "cdkConnectedOverlayLockPosition", "lockPosition", booleanAttribute],
        flexibleDimensions: [InputFlags.HasDecoratorInputTransform, "cdkConnectedOverlayFlexibleDimensions", "flexibleDimensions", booleanAttribute],
        growAfterOpen: [InputFlags.HasDecoratorInputTransform, "cdkConnectedOverlayGrowAfterOpen", "growAfterOpen", booleanAttribute],
        push: [InputFlags.HasDecoratorInputTransform, "cdkConnectedOverlayPush", "push", booleanAttribute],
        disposeOnNavigation: [InputFlags.HasDecoratorInputTransform, "cdkConnectedOverlayDisposeOnNavigation", "disposeOnNavigation", booleanAttribute]
      },
      outputs: {
        backdropClick: "backdropClick",
        positionChange: "positionChange",
        attach: "attach",
        detach: "detach",
        overlayKeydown: "overlayKeydown",
        overlayOutsideClick: "overlayOutsideClick"
      },
      exportAs: ["cdkConnectedOverlay"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkConnectedOverlay, [{
    type: Directive,
    args: [{
      selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]",
      exportAs: "cdkConnectedOverlay",
      standalone: true
    }]
  }], () => [{
    type: Overlay
  }, {
    type: TemplateRef
  }, {
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY]
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    origin: [{
      type: Input,
      args: ["cdkConnectedOverlayOrigin"]
    }],
    positions: [{
      type: Input,
      args: ["cdkConnectedOverlayPositions"]
    }],
    positionStrategy: [{
      type: Input,
      args: ["cdkConnectedOverlayPositionStrategy"]
    }],
    offsetX: [{
      type: Input,
      args: ["cdkConnectedOverlayOffsetX"]
    }],
    offsetY: [{
      type: Input,
      args: ["cdkConnectedOverlayOffsetY"]
    }],
    width: [{
      type: Input,
      args: ["cdkConnectedOverlayWidth"]
    }],
    height: [{
      type: Input,
      args: ["cdkConnectedOverlayHeight"]
    }],
    minWidth: [{
      type: Input,
      args: ["cdkConnectedOverlayMinWidth"]
    }],
    minHeight: [{
      type: Input,
      args: ["cdkConnectedOverlayMinHeight"]
    }],
    backdropClass: [{
      type: Input,
      args: ["cdkConnectedOverlayBackdropClass"]
    }],
    panelClass: [{
      type: Input,
      args: ["cdkConnectedOverlayPanelClass"]
    }],
    viewportMargin: [{
      type: Input,
      args: ["cdkConnectedOverlayViewportMargin"]
    }],
    scrollStrategy: [{
      type: Input,
      args: ["cdkConnectedOverlayScrollStrategy"]
    }],
    open: [{
      type: Input,
      args: ["cdkConnectedOverlayOpen"]
    }],
    disableClose: [{
      type: Input,
      args: ["cdkConnectedOverlayDisableClose"]
    }],
    transformOriginSelector: [{
      type: Input,
      args: ["cdkConnectedOverlayTransformOriginOn"]
    }],
    hasBackdrop: [{
      type: Input,
      args: [{
        alias: "cdkConnectedOverlayHasBackdrop",
        transform: booleanAttribute
      }]
    }],
    lockPosition: [{
      type: Input,
      args: [{
        alias: "cdkConnectedOverlayLockPosition",
        transform: booleanAttribute
      }]
    }],
    flexibleDimensions: [{
      type: Input,
      args: [{
        alias: "cdkConnectedOverlayFlexibleDimensions",
        transform: booleanAttribute
      }]
    }],
    growAfterOpen: [{
      type: Input,
      args: [{
        alias: "cdkConnectedOverlayGrowAfterOpen",
        transform: booleanAttribute
      }]
    }],
    push: [{
      type: Input,
      args: [{
        alias: "cdkConnectedOverlayPush",
        transform: booleanAttribute
      }]
    }],
    disposeOnNavigation: [{
      type: Input,
      args: [{
        alias: "cdkConnectedOverlayDisposeOnNavigation",
        transform: booleanAttribute
      }]
    }],
    backdropClick: [{
      type: Output
    }],
    positionChange: [{
      type: Output
    }],
    attach: [{
      type: Output
    }],
    detach: [{
      type: Output
    }],
    overlayKeydown: [{
      type: Output
    }],
    overlayOutsideClick: [{
      type: Output
    }]
  });
})();
function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition();
}
var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
  provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
  deps: [Overlay],
  useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY
};
var OverlayModule = class _OverlayModule {
  static {
    this.ɵfac = function OverlayModule_Factory(t) {
      return new (t || _OverlayModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OverlayModule,
      imports: [BidiModule, PortalModule, ScrollingModule, CdkConnectedOverlay, CdkOverlayOrigin],
      exports: [CdkConnectedOverlay, CdkOverlayOrigin, ScrollingModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER],
      imports: [BidiModule, PortalModule, ScrollingModule, ScrollingModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayModule, [{
    type: NgModule,
    args: [{
      imports: [BidiModule, PortalModule, ScrollingModule, CdkConnectedOverlay, CdkOverlayOrigin],
      exports: [CdkConnectedOverlay, CdkOverlayOrigin, ScrollingModule],
      providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER]
    }]
  }], null, null);
})();
var FullscreenOverlayContainer = class _FullscreenOverlayContainer extends OverlayContainer {
  constructor(_document, platform) {
    super(_document, platform);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._fullScreenEventName && this._fullScreenListener) {
      this._document.removeEventListener(this._fullScreenEventName, this._fullScreenListener);
    }
  }
  _createContainer() {
    super._createContainer();
    this._adjustParentForFullscreenChange();
    this._addFullscreenChangeListener(() => this._adjustParentForFullscreenChange());
  }
  _adjustParentForFullscreenChange() {
    if (!this._containerElement) {
      return;
    }
    const fullscreenElement = this.getFullscreenElement();
    const parent = fullscreenElement || this._document.body;
    parent.appendChild(this._containerElement);
  }
  _addFullscreenChangeListener(fn) {
    const eventName = this._getEventName();
    if (eventName) {
      if (this._fullScreenListener) {
        this._document.removeEventListener(eventName, this._fullScreenListener);
      }
      this._document.addEventListener(eventName, fn);
      this._fullScreenListener = fn;
    }
  }
  _getEventName() {
    if (!this._fullScreenEventName) {
      const _document = this._document;
      if (_document.fullscreenEnabled) {
        this._fullScreenEventName = "fullscreenchange";
      } else if (_document.webkitFullscreenEnabled) {
        this._fullScreenEventName = "webkitfullscreenchange";
      } else if (_document.mozFullScreenEnabled) {
        this._fullScreenEventName = "mozfullscreenchange";
      } else if (_document.msFullscreenEnabled) {
        this._fullScreenEventName = "MSFullscreenChange";
      }
    }
    return this._fullScreenEventName;
  }
  /**
   * When the page is put into fullscreen mode, a specific element is specified.
   * Only that element and its children are visible when in fullscreen mode.
   */
  getFullscreenElement() {
    const _document = this._document;
    return _document.fullscreenElement || _document.webkitFullscreenElement || _document.mozFullScreenElement || _document.msFullscreenElement || null;
  }
  static {
    this.ɵfac = function FullscreenOverlayContainer_Factory(t) {
      return new (t || _FullscreenOverlayContainer)(ɵɵinject(DOCUMENT), ɵɵinject(Platform));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _FullscreenOverlayContainer,
      factory: _FullscreenOverlayContainer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FullscreenOverlayContainer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Platform
  }], null);
})();

// node_modules/ng-select2-component/node_modules/ngx-infinite-scroll/fesm2022/ngx-infinite-scroll.mjs
function resolveContainerElement(selector, scrollWindow, defaultElement, fromRoot) {
  const hasWindow = window && !!window.document && window.document.documentElement;
  let container = hasWindow && scrollWindow ? window : defaultElement;
  if (selector) {
    const containerIsString = selector && hasWindow && typeof selector === "string";
    container = containerIsString ? findElement(selector, defaultElement.nativeElement, fromRoot) : selector;
    if (!container) {
      throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");
    }
  }
  return container;
}
function findElement(selector, customRoot, fromRoot) {
  const rootEl = fromRoot ? window.document : customRoot;
  return rootEl.querySelector(selector);
}
function inputPropChanged(prop) {
  return prop && !prop.firstChange;
}
function hasWindowDefined() {
  return typeof window !== "undefined";
}
var VerticalProps = {
  clientHeight: "clientHeight",
  offsetHeight: "offsetHeight",
  scrollHeight: "scrollHeight",
  pageYOffset: "pageYOffset",
  offsetTop: "offsetTop",
  scrollTop: "scrollTop",
  top: "top"
};
var HorizontalProps = {
  clientHeight: "clientWidth",
  offsetHeight: "offsetWidth",
  scrollHeight: "scrollWidth",
  pageYOffset: "pageXOffset",
  offsetTop: "offsetLeft",
  scrollTop: "scrollLeft",
  top: "left"
};
var AxisResolver = class {
  constructor(vertical = true) {
    this.vertical = vertical;
    this.propsMap = vertical ? VerticalProps : HorizontalProps;
  }
  clientHeightKey() {
    return this.propsMap.clientHeight;
  }
  offsetHeightKey() {
    return this.propsMap.offsetHeight;
  }
  scrollHeightKey() {
    return this.propsMap.scrollHeight;
  }
  pageYOffsetKey() {
    return this.propsMap.pageYOffset;
  }
  offsetTopKey() {
    return this.propsMap.offsetTop;
  }
  scrollTopKey() {
    return this.propsMap.scrollTop;
  }
  topKey() {
    return this.propsMap.top;
  }
};
function shouldTriggerEvents(alwaysCallback, shouldFireScrollEvent2, isTriggeredCurrentTotal) {
  if (alwaysCallback && shouldFireScrollEvent2) {
    return true;
  }
  if (!isTriggeredCurrentTotal && shouldFireScrollEvent2) {
    return true;
  }
  return false;
}
function createResolver({
  windowElement,
  axis
}) {
  return createResolverWithContainer({
    axis,
    isWindow: isElementWindow(windowElement)
  }, windowElement);
}
function createResolverWithContainer(resolver, windowElement) {
  const container = resolver.isWindow || windowElement && !windowElement.nativeElement ? windowElement : windowElement.nativeElement;
  return __spreadProps(__spreadValues({}, resolver), {
    container
  });
}
function isElementWindow(windowElement) {
  const isWindow = ["Window", "global"].some((obj) => Object.prototype.toString.call(windowElement).includes(obj));
  return isWindow;
}
function getDocumentElement(isContainerWindow, windowElement) {
  return isContainerWindow ? windowElement.document.documentElement : null;
}
function calculatePoints(element, resolver) {
  const height = extractHeightForElement(resolver);
  return resolver.isWindow ? calculatePointsForWindow(height, element, resolver) : calculatePointsForElement(height, element, resolver);
}
function calculatePointsForWindow(height, element, resolver) {
  const {
    axis,
    container,
    isWindow
  } = resolver;
  const {
    offsetHeightKey,
    clientHeightKey
  } = extractHeightPropKeys(axis);
  const scrolled = height + getElementPageYOffset(getDocumentElement(isWindow, container), axis, isWindow);
  const nativeElementHeight = getElementHeight(element.nativeElement, isWindow, offsetHeightKey, clientHeightKey);
  const totalToScroll = getElementOffsetTop(element.nativeElement, axis, isWindow) + nativeElementHeight;
  return {
    height,
    scrolled,
    totalToScroll,
    isWindow
  };
}
function calculatePointsForElement(height, element, resolver) {
  const {
    axis,
    container
  } = resolver;
  const scrolled = container[axis.scrollTopKey()];
  const totalToScroll = container[axis.scrollHeightKey()];
  return {
    height,
    scrolled,
    totalToScroll,
    isWindow: false
  };
}
function extractHeightPropKeys(axis) {
  return {
    offsetHeightKey: axis.offsetHeightKey(),
    clientHeightKey: axis.clientHeightKey()
  };
}
function extractHeightForElement({
  container,
  isWindow,
  axis
}) {
  const {
    offsetHeightKey,
    clientHeightKey
  } = extractHeightPropKeys(axis);
  return getElementHeight(container, isWindow, offsetHeightKey, clientHeightKey);
}
function getElementHeight(elem, isWindow, offsetHeightKey, clientHeightKey) {
  if (isNaN(elem[offsetHeightKey])) {
    const docElem = getDocumentElement(isWindow, elem);
    return docElem ? docElem[clientHeightKey] : 0;
  } else {
    return elem[offsetHeightKey];
  }
}
function getElementOffsetTop(elem, axis, isWindow) {
  const topKey = axis.topKey();
  if (!elem.getBoundingClientRect) {
    return;
  }
  return elem.getBoundingClientRect()[topKey] + getElementPageYOffset(elem, axis, isWindow);
}
function getElementPageYOffset(elem, axis, isWindow) {
  const pageYOffset = axis.pageYOffsetKey();
  const scrollTop = axis.scrollTopKey();
  const offsetTop = axis.offsetTopKey();
  if (isNaN(window.pageYOffset)) {
    return getDocumentElement(isWindow, elem)[scrollTop];
  } else if (elem.ownerDocument) {
    return elem.ownerDocument.defaultView[pageYOffset];
  } else {
    return elem[offsetTop];
  }
}
function shouldFireScrollEvent(container, distance = {
  down: 0,
  up: 0
}, scrollingDown) {
  let remaining;
  let containerBreakpoint;
  if (container.totalToScroll <= 0) {
    return false;
  }
  const scrolledUntilNow = container.isWindow ? container.scrolled : container.height + container.scrolled;
  if (scrollingDown) {
    remaining = (container.totalToScroll - scrolledUntilNow) / container.totalToScroll;
    const distanceDown = distance?.down ? distance.down : 0;
    containerBreakpoint = distanceDown / 10;
  } else {
    const totalHiddenContentHeight = container.scrolled + (container.totalToScroll - scrolledUntilNow);
    remaining = container.scrolled / totalHiddenContentHeight;
    const distanceUp = distance?.up ? distance.up : 0;
    containerBreakpoint = distanceUp / 10;
  }
  const shouldFireEvent = remaining <= containerBreakpoint;
  return shouldFireEvent;
}
function isScrollingDownwards(lastScrollPosition, container) {
  return lastScrollPosition < container.scrolled;
}
function getScrollStats(lastScrollPosition, container, distance) {
  const scrollDown = isScrollingDownwards(lastScrollPosition, container);
  return {
    fire: shouldFireScrollEvent(container, distance, scrollDown),
    scrollDown
  };
}
var ScrollState = class {
  constructor(attrs) {
    this.lastScrollPosition = 0;
    this.lastTotalToScroll = 0;
    this.totalToScroll = 0;
    this.triggered = {
      down: 0,
      up: 0
    };
    Object.assign(this, attrs);
  }
  updateScrollPosition(position) {
    return this.lastScrollPosition = position;
  }
  updateTotalToScroll(totalToScroll) {
    if (this.lastTotalToScroll !== totalToScroll) {
      this.lastTotalToScroll = this.totalToScroll;
      this.totalToScroll = totalToScroll;
    }
  }
  updateScroll(scrolledUntilNow, totalToScroll) {
    this.updateScrollPosition(scrolledUntilNow);
    this.updateTotalToScroll(totalToScroll);
  }
  updateTriggeredFlag(scroll, isScrollingDown) {
    if (isScrollingDown) {
      this.triggered.down = scroll;
    } else {
      this.triggered.up = scroll;
    }
  }
  isTriggeredScroll(totalToScroll, isScrollingDown) {
    return isScrollingDown ? this.triggered.down === totalToScroll : this.triggered.up === totalToScroll;
  }
};
function createScroller(config) {
  const {
    scrollContainer,
    scrollWindow,
    element,
    fromRoot
  } = config;
  const resolver = createResolver({
    axis: new AxisResolver(!config.horizontal),
    windowElement: resolveContainerElement(scrollContainer, scrollWindow, element, fromRoot)
  });
  const scrollState = new ScrollState({
    totalToScroll: calculatePoints(element, resolver).totalToScroll
  });
  const options = {
    container: resolver.container,
    throttle: config.throttle
  };
  const distance = {
    up: config.upDistance,
    down: config.downDistance
  };
  return attachScrollEvent(options).pipe(mergeMap(() => of(calculatePoints(element, resolver))), map((positionStats) => toInfiniteScrollParams(scrollState.lastScrollPosition, positionStats, distance)), tap(({
    stats
  }) => scrollState.updateScroll(stats.scrolled, stats.totalToScroll)), filter(({
    fire,
    scrollDown,
    stats: {
      totalToScroll
    }
  }) => shouldTriggerEvents(config.alwaysCallback, fire, scrollState.isTriggeredScroll(totalToScroll, scrollDown))), tap(({
    scrollDown,
    stats: {
      totalToScroll
    }
  }) => {
    scrollState.updateTriggeredFlag(totalToScroll, scrollDown);
  }), map(toInfiniteScrollAction));
}
function attachScrollEvent(options) {
  let obs = fromEvent(options.container, "scroll");
  if (options.throttle) {
    obs = obs.pipe(throttleTime(options.throttle, void 0, {
      leading: true,
      trailing: true
    }));
  }
  return obs;
}
function toInfiniteScrollParams(lastScrollPosition, stats, distance) {
  const {
    scrollDown,
    fire
  } = getScrollStats(lastScrollPosition, stats, distance);
  return {
    scrollDown,
    fire,
    stats
  };
}
var InfiniteScrollActions = {
  DOWN: "[NGX_ISE] DOWN",
  UP: "[NGX_ISE] UP"
};
function toInfiniteScrollAction(response) {
  const {
    scrollDown,
    stats: {
      scrolled: currentScrollPosition
    }
  } = response;
  return {
    type: scrollDown ? InfiniteScrollActions.DOWN : InfiniteScrollActions.UP,
    payload: {
      currentScrollPosition
    }
  };
}
var InfiniteScrollDirective = class _InfiniteScrollDirective {
  constructor(element, zone) {
    this.element = element;
    this.zone = zone;
    this.scrolled = new EventEmitter();
    this.scrolledUp = new EventEmitter();
    this.infiniteScrollDistance = 2;
    this.infiniteScrollUpDistance = 1.5;
    this.infiniteScrollThrottle = 150;
    this.infiniteScrollDisabled = false;
    this.infiniteScrollContainer = null;
    this.scrollWindow = true;
    this.immediateCheck = false;
    this.horizontal = false;
    this.alwaysCallback = false;
    this.fromRoot = false;
  }
  ngAfterViewInit() {
    if (!this.infiniteScrollDisabled) {
      this.setup();
    }
  }
  ngOnChanges({
    infiniteScrollContainer,
    infiniteScrollDisabled,
    infiniteScrollDistance
  }) {
    const containerChanged = inputPropChanged(infiniteScrollContainer);
    const disabledChanged = inputPropChanged(infiniteScrollDisabled);
    const distanceChanged = inputPropChanged(infiniteScrollDistance);
    const shouldSetup = !disabledChanged && !this.infiniteScrollDisabled || disabledChanged && !infiniteScrollDisabled.currentValue || distanceChanged;
    if (containerChanged || disabledChanged || distanceChanged) {
      this.destroyScroller();
      if (shouldSetup) {
        this.setup();
      }
    }
  }
  ngOnDestroy() {
    this.destroyScroller();
  }
  setup() {
    if (!hasWindowDefined()) {
      return;
    }
    this.zone.runOutsideAngular(() => {
      this.disposeScroller = createScroller({
        fromRoot: this.fromRoot,
        alwaysCallback: this.alwaysCallback,
        disable: this.infiniteScrollDisabled,
        downDistance: this.infiniteScrollDistance,
        element: this.element,
        horizontal: this.horizontal,
        scrollContainer: this.infiniteScrollContainer,
        scrollWindow: this.scrollWindow,
        throttle: this.infiniteScrollThrottle,
        upDistance: this.infiniteScrollUpDistance
      }).subscribe((payload) => this.handleOnScroll(payload));
    });
  }
  handleOnScroll({
    type,
    payload
  }) {
    const emitter = type === InfiniteScrollActions.DOWN ? this.scrolled : this.scrolledUp;
    if (hasObservers(emitter)) {
      this.zone.run(() => emitter.emit(payload));
    }
  }
  destroyScroller() {
    if (this.disposeScroller) {
      this.disposeScroller.unsubscribe();
    }
  }
  static {
    this.ɵfac = function InfiniteScrollDirective_Factory(t) {
      return new (t || _InfiniteScrollDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _InfiniteScrollDirective,
      selectors: [["", "infiniteScroll", ""], ["", "infinite-scroll", ""], ["", "data-infinite-scroll", ""]],
      inputs: {
        infiniteScrollDistance: "infiniteScrollDistance",
        infiniteScrollUpDistance: "infiniteScrollUpDistance",
        infiniteScrollThrottle: "infiniteScrollThrottle",
        infiniteScrollDisabled: "infiniteScrollDisabled",
        infiniteScrollContainer: "infiniteScrollContainer",
        scrollWindow: "scrollWindow",
        immediateCheck: "immediateCheck",
        horizontal: "horizontal",
        alwaysCallback: "alwaysCallback",
        fromRoot: "fromRoot"
      },
      outputs: {
        scrolled: "scrolled",
        scrolledUp: "scrolledUp"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfiniteScrollDirective, [{
    type: Directive,
    args: [{
      selector: "[infiniteScroll], [infinite-scroll], [data-infinite-scroll]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }], {
    scrolled: [{
      type: Output
    }],
    scrolledUp: [{
      type: Output
    }],
    infiniteScrollDistance: [{
      type: Input
    }],
    infiniteScrollUpDistance: [{
      type: Input
    }],
    infiniteScrollThrottle: [{
      type: Input
    }],
    infiniteScrollDisabled: [{
      type: Input
    }],
    infiniteScrollContainer: [{
      type: Input
    }],
    scrollWindow: [{
      type: Input
    }],
    immediateCheck: [{
      type: Input
    }],
    horizontal: [{
      type: Input
    }],
    alwaysCallback: [{
      type: Input
    }],
    fromRoot: [{
      type: Input
    }]
  });
})();
function hasObservers(emitter) {
  return emitter.observed ?? emitter.observers.length > 0;
}
var InfiniteScrollModule = class _InfiniteScrollModule {
  static {
    this.ɵfac = function InfiniteScrollModule_Factory(t) {
      return new (t || _InfiniteScrollModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _InfiniteScrollModule,
      imports: [InfiniteScrollDirective],
      exports: [InfiniteScrollDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfiniteScrollModule, [{
    type: NgModule,
    args: [{
      exports: [InfiniteScrollDirective],
      imports: [InfiniteScrollDirective]
    }]
  }], null, null);
})();

// node_modules/ng-select2-component/fesm2022/ng-select2-component.mjs
var _c02 = ["selection"];
var _c12 = ["results"];
var _c2 = ["searchInput"];
var _c3 = ["dropdown"];
var _c4 = ["result"];
var _c5 = [[["select2-label"]], [["select2-hint"]]];
var _c6 = ["select2-label", "select2-hint"];
var _c7 = () => [];
function Select2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
}
function Select2_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, " ");
    ɵɵelementEnd();
  }
}
function Select2_Conditional_8_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 19);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("innerHTML", ctx_r1.select2Option.label, ɵɵsanitizeHtml);
  }
}
function Select2_Conditional_8_Conditional_2_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Select2_Conditional_8_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Select2_Conditional_8_Conditional_2_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.getTemplate(ctx_r1.select2Option, "option", true))("ngTemplateOutletContext", ctx_r1.select2Option);
  }
}
function Select2_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Select2_Conditional_8_Conditional_2_Conditional_0_Template, 1, 1, "span", 19)(1, Select2_Conditional_8_Conditional_2_Conditional_1_Template, 1, 2);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵconditional(0, !ctx_r1.hasTemplate(ctx_r1.select2Option, "option", true) || ctx_r1.noLabelTemplate ? 0 : 1);
  }
}
function Select2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtemplate(1, Select2_Conditional_8_Conditional_1_Template, 2, 0, "span")(2, Select2_Conditional_8_Conditional_2_Template, 2, 1);
    ɵɵelementStart(3, "span", 18);
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("title", (ctx_r1.select2Option == null ? null : ctx_r1.select2Option.label) || "");
    ɵɵadvance();
    ɵɵconditional(1, !ctx_r1.select2Option ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(2, ctx_r1.select2Option ? 2 : -1);
    ɵɵadvance();
    ɵɵclassProp("select2-selection__placeholder__option", ctx_r1.option);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.placeholder);
  }
}
function Select2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 21);
    ɵɵlistener("click", function Select2_Conditional_9_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.reset($event));
    });
    ɵɵtext(1, "×");
    ɵɵelementEnd();
  }
}
function Select2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 14);
  }
}
function Select2_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 18);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassProp("select2-selection__placeholder__option", (ctx_r1.select2Options == null ? null : ctx_r1.select2Options.length) > 0);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.placeholder);
  }
}
function Select2_Conditional_11_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 27);
    ɵɵlistener("click", function Select2_Conditional_11_For_3_Conditional_1_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r6);
      const op_r5 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.removeSelection($event, op_r5));
    });
    ɵɵtext(1, "×");
    ɵɵelementEnd();
  }
}
function Select2_Conditional_11_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 19);
  }
  if (rf & 2) {
    const op_r5 = ɵɵnextContext().$implicit;
    ɵɵproperty("innerHTML", op_r5.label, ɵɵsanitizeHtml);
  }
}
function Select2_Conditional_11_For_3_Conditional_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Select2_Conditional_11_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Select2_Conditional_11_For_3_Conditional_3_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const op_r5 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.getTemplate(op_r5, "option", true))("ngTemplateOutletContext", op_r5);
  }
}
function Select2_Conditional_11_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 25);
    ɵɵlistener("keydown.enter", function Select2_Conditional_11_For_3_Template_li_keydown_enter_0_listener($event) {
      const op_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.removeSelection($event, op_r5));
    });
    ɵɵtemplate(1, Select2_Conditional_11_For_3_Conditional_1_Template, 2, 0, "span", 26)(2, Select2_Conditional_11_For_3_Conditional_2_Template, 1, 1, "span", 19)(3, Select2_Conditional_11_For_3_Conditional_3_Template, 1, 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const op_r5 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("title", op_r5.label);
    ɵɵadvance();
    ɵɵconditional(1, !(ctx_r1.disabled || ctx_r1.readonly) ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(2, !ctx_r1.hasTemplate(op_r5, "option", true) || ctx_r1.noLabelTemplate ? 2 : 3);
  }
}
function Select2_Conditional_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 28);
    ɵɵlistener("focus", function Select2_Conditional_11_Conditional_4_Template_li_focus_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.stopEvent($event));
    })("blur", function Select2_Conditional_11_Conditional_4_Template_li_blur_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.stopEvent($event));
    });
    ɵɵelementStart(1, "input", 29);
    ɵɵlistener("click", function Select2_Conditional_11_Conditional_4_Template_input_click_1_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(2);
      ctx_r1.toggleOpenAndClose(false, true);
      return ɵɵresetView(ctx_r1.stopEvent($event));
    })("keydown", function Select2_Conditional_11_Conditional_4_Template_input_keydown_1_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.keyDown($event, true));
    })("keyup", function Select2_Conditional_11_Conditional_4_Template_input_keyup_1_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.searchUpdate($event));
    })("change", function Select2_Conditional_11_Conditional_4_Template_input_change_1_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.prevChange($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("id", ctx_r1.id + "-create-field");
  }
}
function Select2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 15);
    ɵɵtemplate(1, Select2_Conditional_11_Conditional_1_Template, 2, 3, "span", 22);
    ɵɵrepeaterCreate(2, Select2_Conditional_11_For_3_Template, 4, 3, "li", 23, ɵɵcomponentInstance().trackBy, true);
    ɵɵtemplate(4, Select2_Conditional_11_Conditional_4_Template, 2, 1, "li", 24);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(1, !ctx_r1.autoCreate ? 1 : -1);
    ɵɵadvance();
    ɵɵrepeater(ctx_r1.option || ɵɵpureFunction0(2, _c7));
    ɵɵadvance(2);
    ɵɵconditional(4, ctx_r1.autoCreate ? 4 : -1);
  }
}
function Select2_Conditional_12_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Select2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Select2_Conditional_12_ng_container_0_Template, 1, 0, "ng-container", 30);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const containerTemplate_r8 = ɵɵreference(17);
    ɵɵproperty("ngTemplateOutlet", containerTemplate_r8);
  }
}
function Select2_ng_template_15_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Select2_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Select2_ng_template_15_ng_container_0_Template, 1, 0, "ng-container", 30);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const containerTemplate_r8 = ɵɵreference(17);
    ɵɵproperty("ngTemplateOutlet", containerTemplate_r8);
  }
}
function Select2_ng_template_16_For_10_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "strong", 19);
  }
  if (rf & 2) {
    const groupOrOption_r10 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("innerHTML", groupOrOption_r10.label, ɵɵsanitizeHtml);
    ɵɵattribute("class", "select2-results__group" + (groupOrOption_r10.classes ? " " + groupOrOption_r10.classes : ""));
  }
}
function Select2_ng_template_16_For_10_Conditional_0_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Select2_ng_template_16_For_10_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Select2_ng_template_16_For_10_Conditional_0_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const groupOrOption_r10 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.getTemplate(groupOrOption_r10, "group"))("ngTemplateOutletContext", groupOrOption_r10);
  }
}
function Select2_ng_template_16_For_10_Conditional_0_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 43);
  }
  if (rf & 2) {
    const option_r12 = ɵɵnextContext().$implicit;
    ɵɵproperty("innerHTML", option_r12.label, ɵɵsanitizeHtml);
  }
}
function Select2_ng_template_16_For_10_Conditional_0_For_5_Conditional_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Select2_ng_template_16_For_10_Conditional_0_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Select2_ng_template_16_For_10_Conditional_0_For_5_Conditional_3_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const option_r12 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.getTemplate(option_r12, "option"))("ngTemplateOutletContext", option_r12);
  }
}
function Select2_ng_template_16_For_10_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 42, 5);
    ɵɵlistener("mouseenter", function Select2_ng_template_16_For_10_Conditional_0_For_5_Template_li_mouseenter_0_listener() {
      const option_r12 = ɵɵrestoreView(_r11).$implicit;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.mouseenter(option_r12));
    })("click", function Select2_ng_template_16_For_10_Conditional_0_For_5_Template_li_click_0_listener() {
      const option_r12 = ɵɵrestoreView(_r11).$implicit;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.click(option_r12));
    });
    ɵɵtemplate(2, Select2_ng_template_16_For_10_Conditional_0_For_5_Conditional_2_Template, 1, 1, "div", 43)(3, Select2_ng_template_16_For_10_Conditional_0_For_5_Conditional_3_Template, 1, 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r12 = ctx.$implicit;
    const j_r13 = ctx.$index;
    const i_r14 = ɵɵnextContext(2).$index;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.getOptionStyle(option_r12));
    ɵɵproperty("id", option_r12.id || ctx_r1.id + "-option-" + i_r14 + "-" + j_r13);
    ɵɵattribute("aria-selected", ctx_r1.isSelected(option_r12))("aria-disabled", ctx_r1.isDisabled(option_r12));
    ɵɵadvance(2);
    ɵɵconditional(2, !ctx_r1.hasTemplate(option_r12, "option") ? 2 : 3);
  }
}
function Select2_ng_template_16_For_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 39);
    ɵɵtemplate(1, Select2_ng_template_16_For_10_Conditional_0_Conditional_1_Template, 1, 2, "strong", 19)(2, Select2_ng_template_16_For_10_Conditional_0_Conditional_2_Template, 1, 2);
    ɵɵelementStart(3, "ul", 40);
    ɵɵrepeaterCreate(4, Select2_ng_template_16_For_10_Conditional_0_For_5_Template, 4, 6, "li", 41, ɵɵcomponentInstance().trackBy, true);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const groupOrOption_r10 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional(1, !ctx_r1.hasTemplate(groupOrOption_r10, "group") ? 1 : 2);
    ɵɵadvance(3);
    ɵɵrepeater(groupOrOption_r10.options);
  }
}
function Select2_ng_template_16_For_10_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 43);
  }
  if (rf & 2) {
    const groupOrOption_r10 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("innerHTML", groupOrOption_r10.label, ɵɵsanitizeHtml);
  }
}
function Select2_ng_template_16_For_10_Conditional_1_Conditional_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Select2_ng_template_16_For_10_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Select2_ng_template_16_For_10_Conditional_1_Conditional_3_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const groupOrOption_r10 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.getTemplate(groupOrOption_r10, "option"))("ngTemplateOutletContext", groupOrOption_r10);
  }
}
function Select2_ng_template_16_For_10_Conditional_1_ng_template_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Select2_ng_template_16_For_10_Conditional_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Select2_ng_template_16_For_10_Conditional_1_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const groupOrOption_r10 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.getTemplate(groupOrOption_r10, "option"))("ngTemplateOutletContext", groupOrOption_r10);
  }
}
function Select2_ng_template_16_For_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 42, 5);
    ɵɵlistener("mouseenter", function Select2_ng_template_16_For_10_Conditional_1_Template_li_mouseenter_0_listener() {
      ɵɵrestoreView(_r15);
      const groupOrOption_r10 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.mouseenter(groupOrOption_r10));
    })("click", function Select2_ng_template_16_For_10_Conditional_1_Template_li_click_0_listener() {
      ɵɵrestoreView(_r15);
      const groupOrOption_r10 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.click(groupOrOption_r10));
    });
    ɵɵtemplate(2, Select2_ng_template_16_For_10_Conditional_1_Conditional_2_Template, 1, 1, "div", 43)(3, Select2_ng_template_16_For_10_Conditional_1_Conditional_3_Template, 1, 2)(4, Select2_ng_template_16_For_10_Conditional_1_ng_template_4_Template, 1, 2, "ng-template", null, 6, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r15 = ɵɵnextContext();
    const groupOrOption_r10 = ctx_r15.$implicit;
    const i_r14 = ctx_r15.$index;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.getOptionStyle(groupOrOption_r10));
    ɵɵproperty("id", groupOrOption_r10.id || ctx_r1.id + "-option-" + i_r14);
    ɵɵattribute("aria-selected", ctx_r1.isSelected(groupOrOption_r10))("aria-disabled", ctx_r1.isDisabled(groupOrOption_r10));
    ɵɵadvance(2);
    ɵɵconditional(2, !ctx_r1.hasTemplate(groupOrOption_r10, "option") ? 2 : 3);
  }
}
function Select2_ng_template_16_For_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Select2_ng_template_16_For_10_Conditional_0_Template, 6, 1, "li", 39)(1, Select2_ng_template_16_For_10_Conditional_1_Template, 6, 6);
  }
  if (rf & 2) {
    const groupOrOption_r10 = ctx.$implicit;
    ɵɵconditional(0, groupOrOption_r10.options !== void 0 ? 0 : 1);
  }
}
function Select2_ng_template_16_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 37);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ctx_r1.noResultMessage, ɵɵsanitizeHtml);
  }
}
function Select2_ng_template_16_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 38);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ctx_r1.maxResultsMessage, ɵɵsanitizeHtml);
  }
}
function Select2_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 31)(1, "div", 32, 2)(3, "div", 33)(4, "input", 34, 3);
    ɵɵlistener("keydown", function Select2_ng_template_16_Template_input_keydown_4_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.keyDown($event, ctx_r1.autoCreate));
    })("keyup", function Select2_ng_template_16_Template_input_keyup_4_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.searchUpdate($event));
    })("change", function Select2_ng_template_16_Template_input_change_4_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.prevChange($event));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(6, "div", 35)(7, "ul", 36, 4);
    ɵɵlistener("scrolled", function Select2_ng_template_16_Template_ul_scrolled_7_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onScroll("down"));
    })("scrolledUp", function Select2_ng_template_16_Template_ul_scrolledUp_7_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onScroll("up"));
    })("keydown", function Select2_ng_template_16_Template_ul_keydown_7_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.keyDown($event));
    });
    ɵɵrepeaterCreate(9, Select2_ng_template_16_For_10_Template, 2, 1, null, null, ɵɵcomponentInstance().trackBy, true);
    ɵɵtemplate(11, Select2_ng_template_16_Conditional_11_Template, 1, 1, "li", 37)(12, Select2_ng_template_16_Conditional_12_Template, 1, 1, "li", 38);
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const results_r17 = ɵɵreference(8);
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("select2-container--open", ctx_r1.isOpen)("select2-overlay", ctx_r1.overlay)("select2-position-auto", ctx_r1.listPosition === "auto")("select2-style-borderless", ctx_r1.styleMode === "borderless");
    ɵɵadvance();
    ɵɵclassProp("select2-dropdown--below", !ctx_r1.select2above)("select2-dropdown--above", ctx_r1.select2above);
    ɵɵadvance(2);
    ɵɵclassProp("select2-search--hide", ctx_r1.hideSearch());
    ɵɵadvance();
    ɵɵproperty("id", ctx_r1.id + "-search-field")("value", ctx_r1.searchText);
    ɵɵattribute("tabindex", ctx_r1.isOpen ? ctx_r1.tabIndex : "-1");
    ɵɵadvance(3);
    ɵɵstyleProp("max-height", ctx_r1.resultMaxHeight)("--grid-size", ctx_r1.grid || null);
    ɵɵclassProp("select2-grid", ctx_r1.grid && ctx_r1.isNumber(ctx_r1.grid))("select2-grid-auto", ctx_r1.grid && !ctx_r1.isNumber(ctx_r1.grid));
    ɵɵproperty("infiniteScrollDisabled", !ctx_r1.infiniteScroll && !ctx_r1.isOpen)("infiniteScrollDistance", ctx_r1.infiniteScrollDistance)("infiniteScrollThrottle", ctx_r1.infiniteScrollThrottle)("infiniteScrollContainer", results_r17);
    ɵɵadvance(2);
    ɵɵrepeater(ctx_r1.filteredData);
    ɵɵadvance(2);
    ɵɵconditional(11, !(ctx_r1.filteredData == null ? null : ctx_r1.filteredData.length) && ctx_r1.noResultMessage ? 11 : -1);
    ɵɵadvance();
    ɵɵconditional(12, ctx_r1.maxResultsExceeded ? 12 : -1);
  }
}
var timeout = 200;
var unicodePatterns = [{
  l: "a",
  s: /[ⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ]/gi
}, {
  l: "aa",
  s: /ꜳ/gi
}, {
  l: "ae",
  s: /[æǽǣ]/gi
}, {
  l: "ao",
  s: /ꜵ/gi
}, {
  l: "au",
  s: /ꜷ/gi
}, {
  l: "av",
  s: /[ꜹꜻ]/gi
}, {
  l: "ay",
  s: /ꜽ/gi
}, {
  l: "b",
  s: /[ⓑｂḃḅḇƀƃɓ]/gi
}, {
  l: "c",
  s: /[ⓒｃćĉċčçḉƈȼꜿↄ]/gi
}, {
  l: "d",
  s: /[ⓓｄḋďḍḑḓḏđƌɖɗꝺ]/gi
}, {
  l: "dz",
  s: /[ǳǆ]/gi
}, {
  l: "e",
  s: /[ⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ]/gi
}, {
  l: "f",
  s: /[ⓕｆḟƒꝼ]/gi
}, {
  l: "g",
  s: /[ⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ]/gi
}, {
  l: "h",
  s: /[ⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ]/gi
}, {
  l: "hv",
  s: /ƕ/gi
}, {
  l: "i",
  s: /[ⓘｉìíîĩīĭİïḯỉǐȉȋịįḭɨı]/gi
}, {
  l: "j",
  s: /[ⓙｊĵǰɉ]/gi
}, {
  l: "k",
  s: /[ⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ]/gi
}, {
  l: "l",
  s: /[ⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇꝆ]/gi
}, {
  l: "lj",
  s: /ǉ/gi
}, {
  l: "m",
  s: /[ⓜｍḿṁṃɱɯ]/gi
}, {
  l: "n",
  s: /[ⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ]/gi
}, {
  l: "nj",
  s: /ǌ/gi
}, {
  l: "o",
  s: /[ⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔƟꝋꝍɵ]/gi
}, {
  l: "oi",
  s: /ƣ/gi
}, {
  l: "oe",
  s: /œ/gi
}, {
  l: "oo",
  s: /ꝏ/gi
}, {
  l: "ou",
  s: /ȣ/gi
}, {
  l: "p",
  s: /[ⓟｐṕṗƥᵽꝑꝓꝕ]/gi
}, {
  l: "q",
  s: /[ⓠｑɋꝗꝙ]/gi
}, {
  l: "r",
  s: /[ⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ]/gi
}, {
  l: "s",
  s: /[ⓢｓßẞśṥŝṡšṧṣṩșşȿꞩꞅẛ]/gi
}, {
  l: "t",
  s: /[ⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ]/gi
}, {
  l: "tz",
  s: /ꜩ/gi
}, {
  l: "u",
  s: /[ⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ]/gi
}, {
  l: "v",
  s: /[ⓥｖṽṿʋꝟʌ]/gi
}, {
  l: "vy",
  s: /ꝡ/gi
}, {
  l: "w",
  s: /[ⓦｗẁẃŵẇẅẘẉⱳ]/gi
}, {
  l: "x",
  s: /[ⓧｘẋẍ]/gi
}, {
  l: "y",
  s: /[ⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ]/gi
}, {
  l: "z",
  s: /[ⓩｚźẑżžẓẕƶȥɀⱬꝣ]/gi
}];
var defaultMinCountForSearch = 6;
var protectRegexp = new RegExp("[\\-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\\\\^\\$\\|]", "g");
var Select2Utils = class _Select2Utils {
  static getOptionByValue(data, value) {
    if (Array.isArray(data)) {
      for (const groupOrOption of data) {
        const options = groupOrOption.options;
        if (options) {
          for (const option of options) {
            if (option.value === value) {
              return option;
            }
          }
        } else if (groupOrOption.value === value) {
          return groupOrOption;
        }
      }
    }
    return void 0;
  }
  static getOptionsByValue(data, value, multiple) {
    if (multiple) {
      const values = Array.isArray(value) ? value : [];
      const result = [];
      for (const v of values) {
        const option = _Select2Utils.getOptionByValue(data, v);
        if (option) {
          result.push(option);
        }
      }
      return result;
    }
    return _Select2Utils.getOptionByValue(data, value);
  }
  static getFirstAvailableOption(data) {
    if (Array.isArray(data)) {
      for (const groupOrOption of data) {
        const options = groupOrOption.options;
        if (options) {
          for (const option of options) {
            if (!option.disabled) {
              return option.value;
            }
          }
        } else {
          const option = groupOrOption;
          if (!option.disabled) {
            return option.value;
          }
        }
      }
    }
    return null;
  }
  static valueIsNotInFilteredData(filteredData, value) {
    if (_Select2Utils.isNullOrUndefined(value)) {
      return true;
    }
    for (const groupOrOption of filteredData) {
      const options = groupOrOption.options;
      if (options) {
        for (const option of options) {
          if (option.value === value) {
            return false;
          }
        }
      } else if (groupOrOption.value === value) {
        return false;
      }
    }
    return true;
  }
  static getPreviousOption(filteredData, hoveringValue) {
    let findIt = _Select2Utils.isNullOrUndefined(hoveringValue);
    for (let i = filteredData.length - 1; i >= 0; i--) {
      const groupOrOption = filteredData[i];
      const options = groupOrOption.options;
      if (options) {
        for (let j = options.length - 1; j >= 0; j--) {
          const option = options[j];
          if (findIt && !option.disabled && !option.hide) {
            return option;
          }
          if (!findIt) {
            findIt = option.value === hoveringValue;
          }
        }
      } else {
        const option = groupOrOption;
        if (findIt && !option.disabled && !option.hide) {
          return option;
        }
        if (!findIt) {
          findIt = option.value === hoveringValue;
        }
      }
    }
    return null;
  }
  static getNextOption(filteredData, hoveringValue) {
    let findIt = _Select2Utils.isNullOrUndefined(hoveringValue);
    for (const groupOrOption of filteredData) {
      const options = groupOrOption.options;
      if (options) {
        for (const option of options) {
          if (findIt) {
            if (!option.disabled && !option.hide) {
              return option;
            }
          } else if (!findIt) {
            findIt = option.value === hoveringValue;
          }
        }
      } else {
        const option = groupOrOption;
        if (findIt) {
          if (!option.disabled && !option.hide) {
            return option;
          }
        } else if (!findIt) {
          findIt = option.value === hoveringValue;
        }
      }
    }
    return null;
  }
  static getReduceData(data, maxResults = 0) {
    if (maxResults > 0) {
      let counter = 0;
      const result = [];
      for (const groupOrOption of data) {
        const options = groupOrOption.options;
        if (options) {
          const group = __spreadProps(__spreadValues({}, groupOrOption), {
            options: []
          });
          result.push(group);
          for (const item of options) {
            group.options.push(item);
            counter++;
            if (counter === maxResults) {
              return {
                result,
                reduce: true
              };
            }
          }
        } else {
          result.push(groupOrOption);
          counter++;
        }
        if (counter === maxResults) {
          return {
            result,
            reduce: true
          };
        }
      }
      return {
        result,
        reduce: false
      };
    } else {
      return {
        result: data,
        reduce: false
      };
    }
  }
  static getFilteredData(data, searchText, editPattern) {
    if (searchText) {
      const result = [];
      for (const groupOrOption of data) {
        const options = groupOrOption.options;
        if (options) {
          if (options.some((group) => _Select2Utils.containSearchText(group.label, searchText, editPattern))) {
            const filteredOptions = options.filter((group) => _Select2Utils.containSearchText(group.label, searchText, editPattern));
            result.push(__spreadProps(__spreadValues({}, groupOrOption), {
              options: filteredOptions
            }));
          }
        } else if (_Select2Utils.containSearchText(groupOrOption.label, searchText, editPattern)) {
          result.push(groupOrOption);
        }
      }
      return result;
    } else {
      return data;
    }
  }
  static getFilteredSelectedData(data, selectedOptions) {
    const result = [];
    for (const groupOrOption of data) {
      const options = groupOrOption.options;
      if (options) {
        const filteredOptions = options.filter((group) => _Select2Utils.isSelected(selectedOptions, group, true) === "false");
        if (filteredOptions.length) {
          result.push(__spreadProps(__spreadValues({}, groupOrOption), {
            options: filteredOptions
          }));
        }
      } else if (_Select2Utils.isSelected(selectedOptions, groupOrOption, true) === "false") {
        result.push(groupOrOption);
      }
    }
    return result;
  }
  static isSearchboxHiddex(data, minCountForSearch) {
    if (minCountForSearch === "" || minCountForSearch === void 0 || minCountForSearch === null || isNaN(+minCountForSearch)) {
      minCountForSearch = defaultMinCountForSearch;
    }
    const optionCount = _Select2Utils.getOptionsCount(data);
    return optionCount < +minCountForSearch;
  }
  static isSelected(options, option, multiple) {
    return multiple ? options && options.some((op) => op.value === option.value) ? "true" : "false" : options && option.value === options.value ? "true" : "false";
  }
  static removeSelection(options, option) {
    for (let i = 0; i < options.length; i++) {
      if (options[i].value === option.value) {
        options.splice(i, 1);
        return;
      }
    }
  }
  static getOptionsCount(data) {
    let count = 0;
    if (Array.isArray(data)) {
      for (const groupOrOption of data) {
        const options = groupOrOption.options;
        count += options ? options.length : 1;
      }
    }
    return count;
  }
  static isNullOrUndefined(value) {
    return value === null || value === void 0;
  }
  static containSearchText(label, searchText, editPattern) {
    return searchText ? _Select2Utils.formatSansUnicode(label).match(new RegExp(_Select2Utils.formatPattern(searchText, editPattern), "i")) !== null : true;
  }
  static protectPattern(str) {
    return str.replace(protectRegexp, "\\$&");
  }
  static formatSansUnicode(str) {
    for (const unicodePattern of unicodePatterns) {
      str = str.replace(unicodePattern.s, unicodePattern.l);
    }
    return str;
  }
  static formatPattern(str, editPattern) {
    str = _Select2Utils.formatSansUnicode(_Select2Utils.protectPattern(str));
    if (editPattern && typeof editPattern === "function") {
      str = editPattern(str);
    }
    return str;
  }
};
var nextUniqueId2 = 0;
var displaySearchStatusList = ["default", "hidden", "always"];
var Select2 = class _Select2 {
  /** data of options & optiongrps */
  set data(data) {
    this._data = data;
    this.updateFilteredData(true);
  }
  get multiple() {
    return this._multiple;
  }
  set multiple(value) {
    this._multiple = value;
    this.ngOnInit();
  }
  /** minimal data of show the search field */
  get minCountForSearch() {
    return this._minCountForSearch;
  }
  set minCountForSearch(value) {
    this._minCountForSearch = value;
    this.updateSearchBox();
  }
  /** Unique id of the element. */
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value || this._uid;
  }
  /** Whether selected items should be hidden. */
  get disabled() {
    return this._control ? this._control.disabled : this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  /** The input element's value. */
  get value() {
    return this._value;
  }
  set value(value) {
    if (this.testValueChange(this._value, value)) {
      setTimeout(() => {
        if (this._value === void 0) {
          this._value = value ?? null;
        }
        this.writeValue(value ?? null);
      }, 10);
    }
  }
  /** Tab index for the select2 element. */
  get tabIndex() {
    return this.disabled ? -1 : this._tabIndex;
  }
  set tabIndex(value) {
    this._tabIndex = value;
  }
  get select2Options() {
    return this.multiple ? this.option : null;
  }
  get select2Option() {
    return this.multiple ? null : this.option;
  }
  get searchText() {
    return this.innerSearchText;
  }
  set searchText(text) {
    this.innerSearchText = text;
  }
  get ariaInvalid() {
    return this._isErrorState();
  }
  get classMaterial() {
    return this.styleMode === "material";
  }
  get classNostyle() {
    return this.styleMode === "noStyle";
  }
  get classBorderless() {
    return this.styleMode === "borderless";
  }
  get select2above() {
    return !this.overlay ? this.listPosition === "above" : this._isAbobeOverlay();
  }
  get _positions() {
    return this.listPosition === "auto" ? void 0 : null;
  }
  get resultsElement() {
    return this.resultContainer?.nativeElement;
  }
  constructor(_viewportRuler, _changeDetectorRef, _parentForm, _parentFormGroup, _control, tabIndex) {
    this._viewportRuler = _viewportRuler;
    this._changeDetectorRef = _changeDetectorRef;
    this._parentForm = _parentForm;
    this._parentFormGroup = _parentFormGroup;
    this._control = _control;
    this.minCharForSearch = 0;
    this.limitSelection = 0;
    this.listPosition = "below";
    this.overlay = false;
    this.styleMode = "default";
    this.maxResults = 0;
    this.maxResultsMessage = "Too many results…";
    this.infiniteScrollDistance = 1.5;
    this.infiniteScrollThrottle = 150;
    this.infiniteScroll = false;
    this.autoCreate = false;
    this.noLabelTemplate = false;
    this.resultMaxHeight = "200px";
    this.customSearchEnabled = false;
    this.required = false;
    this.hideSelectedItems = false;
    this.readonly = false;
    this.resettable = false;
    this.grid = "";
    this.update = new EventEmitter();
    this.autoCreateItem = new EventEmitter();
    this.open = new EventEmitter();
    this.close = new EventEmitter();
    this.focus = new EventEmitter();
    this.blur = new EventEmitter();
    this.search = new EventEmitter();
    this.scroll = new EventEmitter();
    this.removeOption = new EventEmitter();
    this.option = null;
    this.isOpen = false;
    this.focused = false;
    this.hoveringValue = null;
    this.innerSearchText = "";
    this._stateChanges = new Subject();
    this._disabled = false;
    this._multiple = false;
    this._uid = `select2-${nextUniqueId2++}`;
    this._value = null;
    this._onTouched = () => {
    };
    this._onChange = () => {
    };
    this.id = this.id;
    this._tabIndex = parseInt(tabIndex, 10) || 0;
    if (this._control) {
      this._control.valueAccessor = this;
    }
  }
  clickDetection(e) {
    if (this.isOpen && focus) {
      const target = e.target;
      if (!this.ifParentContainsClass(target, "selection")) {
        if (!this.ifParentContainsClass(target, "select2-dropdown")) {
          this.toggleOpenAndClose();
        }
        if (!this.overlay && !this.ifParentContainsId(target, this._id)) {
          this.clickExit();
        }
      } else if (!this.ifParentContainsId(target, this._id)) {
        this.toggleOpenAndClose();
        this.clickExit();
      }
    } else if (this.focused) {
      const target = e.target;
      this._focus(this.clickOnSelect2Element(target));
    }
  }
  ngOnInit() {
    this._viewportRuler.change(100).subscribe(() => {
      if (this.isOpen) {
        this.triggerRect();
      }
    });
    const option = Select2Utils.getOptionsByValue(this._data, this._control ? this._control.value : this.value, this.multiple);
    if (option !== null) {
      this.option = option;
    }
    if (!Array.isArray(option)) {
      this.hoveringValue = this.value;
    }
    this.updateSearchBox();
  }
  ngAfterViewInit() {
    this.cdkConnectedOverlay.positionChange.subscribe((posChange) => {
      if (this.listPosition === "auto" && posChange.connectionPair?.originY && this._overlayPosition !== posChange.connectionPair.originY) {
        this.triggerRect();
        this._overlayPosition = posChange.connectionPair.originY;
        this._changeDetectorRef.detectChanges();
      }
    });
    this.selectionElement = this.selection.nativeElement;
    this.triggerRect();
  }
  ngDoCheck() {
    this.updateSearchBox();
    this._dirtyCheckNativeValue();
    if (this._triggerRect) {
      if (this.overlayWidth !== this._triggerRect.width) {
        this.overlayWidth = this._triggerRect.width;
      }
      if (this._dropdownRect?.height > 0 && this.overlayHeight !== this._dropdownRect.height) {
        this.overlayHeight = this.listPosition === "auto" ? this._dropdownRect.height : 0;
      }
    }
  }
  updateSearchBox() {
    const hidden = this.customSearchEnabled ? false : Select2Utils.isSearchboxHiddex(this._data, this._minCountForSearch);
    if (this.isSearchboxHidden !== hidden) {
      this.isSearchboxHidden = hidden;
    }
  }
  hideSearch() {
    const displaySearchStatus = displaySearchStatusList.indexOf(this.displaySearchStatus) > -1 ? this.displaySearchStatus : "default";
    return displaySearchStatus === "default" && this.isSearchboxHidden || displaySearchStatus === "hidden";
  }
  getOptionStyle(option) {
    return "select2-results__option " + (option.hide ? "select2-results__option--hide " : "") + (option.value === this.hoveringValue ? "select2-results__option--highlighted " : "") + (option.classes || "");
  }
  mouseenter(option) {
    if (!option.disabled) {
      this.hoveringValue = option.value;
    }
  }
  click(option) {
    if (this.testSelection(option)) {
      this.select(option);
    }
  }
  reset(event) {
    this.select(this.resetSelectedValue !== void 0 ? Select2Utils.getOptionByValue(this._data, this.resetSelectedValue) ?? null : null);
    if (event) {
      this.stopEvent(event);
    }
  }
  prevChange(event) {
    event.stopPropagation();
  }
  stopEvent(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  toggleOpenAndClose(focus2 = true, open, event) {
    if (this.disabled) {
      return;
    }
    this._focus(focus2);
    const changeEmit = this.isOpen !== (open ?? !this.isOpen);
    this.isOpen = open ?? !this.isOpen;
    if (this.isOpen) {
      if (!this.isSearchboxHidden) {
        this.innerSearchText = "";
        this.updateFilteredData();
        this._focusSearchboxOrResultsElement(focus2);
      }
      if (this.isSearchboxHidden && !changeEmit && event) {
        this.keyDown(event);
      } else {
        setTimeout(() => {
          if (this.option) {
            const option = Array.isArray(this.option) ? this.option[0] : this.option;
            this.updateScrollFromOption(option);
          } else if (this.resultsElement) {
            this.resultsElement.scrollTop = 0;
          }
          setTimeout(() => {
            this.triggerRect();
            this.cdkConnectedOverlay?.overlayRef?.updatePosition();
          }, 100);
        });
      }
      if (changeEmit) {
        this.open.emit(this);
      }
    } else if (changeEmit) {
      this.close.emit(this);
    }
    this._changeDetectorRef.markForCheck();
  }
  hasTemplate(option, defaultValue, select = false) {
    return (select ? this.templates?.[option.templateSelectionId] instanceof TemplateRef || this.templates?.[`${defaultValue}Selection`] instanceof TemplateRef || this.templates?.[`templateSelection`] instanceof TemplateRef || this.templateSelection instanceof TemplateRef : false) || this.templates?.[option.templateId] instanceof TemplateRef || this.templates?.[defaultValue] instanceof TemplateRef || this.templates?.["template"] instanceof TemplateRef || this.templates instanceof TemplateRef || false;
  }
  getTemplate(option, defaultValue, select = false) {
    return this.hasTemplate(option, defaultValue, select) ? (select ? this.templates?.[option.templateSelectionId] || this.templates?.[`${defaultValue}Selection`] || this.templates?.[`templateSelection`] || this.templateSelection : void 0) || this.templates?.[option.templateId] || this.templates?.[defaultValue] || this.templates?.["template"] || this.templates : void 0;
  }
  triggerRect() {
    this._triggerRect = this.selectionElement.getBoundingClientRect();
    this._dropdownRect = this.dropdown?.nativeElement ? this.dropdown.nativeElement.getBoundingClientRect() : void 0;
  }
  isNumber(o) {
    return !isNaN(o - 0) && o !== null && o !== "" && o !== false;
  }
  testSelection(option) {
    if (option.disabled) {
      return false;
    }
    return !this.multiple || !this.limitSelection || Array.isArray(this._value) && this._value.length < this.limitSelection;
  }
  testValueChange(value1, value2) {
    if ((value1 === null || value1 === void 0) && (value2 === null || value2 === void 0) || value1 === value2) {
      return false;
    }
    if (this.multiple && value1?.length && value2?.length && value1.length === value2.length) {
      for (const e1 of value1) {
        const test = value2.indexOf(e1) > -1;
        if (!test) {
          return true;
        }
      }
      return false;
    }
    return true;
  }
  updateFilteredData(writeValue = false) {
    setTimeout(() => {
      let result = this._data;
      if (this.multiple && this.hideSelectedItems) {
        result = Select2Utils.getFilteredSelectedData(result, this.option);
      }
      if (!this.customSearchEnabled && this.searchText && this.searchText.length >= +this.minCharForSearch) {
        result = Select2Utils.getFilteredData(result, this.searchText, this.editPattern);
      }
      if (this.maxResults > 0) {
        const data = Select2Utils.getReduceData(result, +this.maxResults);
        result = data.result;
        this.maxResultsExceeded = data.reduce;
      } else {
        this.maxResultsExceeded = false;
      }
      if (Select2Utils.valueIsNotInFilteredData(result, this.hoveringValue)) {
        this.hoveringValue = Select2Utils.getFirstAvailableOption(result);
      }
      if (writeValue && this._previousNativeValue !== this._value) {
        this.writeValue(this._control ? this._control.value : this._value);
      }
      this.filteredData = result;
      this._changeDetectorRef.markForCheck();
    });
  }
  clickExit() {
    this._focus(false);
  }
  ifParentContainsClass(element, cssClass) {
    return this.getParentElementByClass(element, cssClass) !== null;
  }
  ifParentContainsId(element, id) {
    return this.getParentElementById(element, id) !== null;
  }
  getParentElementByClass(element, cssClass) {
    return this.containClasses(element, cssClass.trim().split(/\s+/)) ? element : element.parentElement ? this.getParentElementByClass(element.parentElement, cssClass) : null;
  }
  getParentElementById(element, id) {
    return element.id === id ? element : element.parentElement ? this.getParentElementById(element.parentElement, id) : null;
  }
  containClasses(element, cssClasses) {
    if (!element.classList) {
      return false;
    }
    for (const cssClass of cssClasses) {
      if (!element.classList.contains(cssClass)) {
        return false;
      }
    }
    return true;
  }
  containAlmostOneClasses(element, cssClasses) {
    if (!element.classList) {
      return false;
    }
    let containAlmostOne = false;
    for (const cssClass of cssClasses) {
      if (element.classList.contains(cssClass)) {
        containAlmostOne = true;
      }
    }
    return containAlmostOne;
  }
  clickOnSelect2Element(element) {
    return this.containAlmostOneClasses(element, ["select2-overlay-backdrop", "select2-label-content", "select2-selection__rendered", "select2-results__option"]);
  }
  focusin() {
    if (!this.disabled) {
      this._focus(true);
    }
  }
  focusout() {
    if (this.selectionElement && !this.selectionElement.classList.contains("select2-focused")) {
      this._focus(false);
      this._onTouched();
    }
  }
  select(option, emit = true) {
    let value;
    if (option !== null && option !== void 0) {
      if (this.multiple) {
        const options = this.option;
        const index = options.findIndex((op) => op.value === option.value);
        if (index === -1) {
          options.push(option);
        } else {
          options.splice(index, 1);
        }
        value = this.option.map((op) => op.value);
      } else {
        this.option = option;
        if (this.isOpen) {
          this.isOpen = false;
          this.close.emit(this);
          this.selectionElement?.focus();
        }
        value = this.option.value;
        if (!option && this._value === null) {
          this._value = value ?? null;
        }
      }
    } else {
      if (Array.isArray(this.option) ? this.option?.length : this.option) {
        value = "";
      }
      this.option = null;
    }
    if (this.multiple && this.hideSelectedItems) {
      this.updateFilteredData();
    }
    emit &&= value !== void 0 && this.testDiffValue(this._value, value);
    if (this._control) {
      this._onChange(value);
    }
    if (emit) {
      this._value = value ?? null;
      setTimeout(() => {
        this.update.emit({
          component: this,
          value: this._value,
          options: Array.isArray(this.option) ? this.option : this.option ? [this.option] : null
        });
      });
    }
  }
  testDiffValue(val1, val2) {
    return Array.isArray(val1) ? val1?.length !== val2?.length : val1 !== val2;
  }
  keyDown(event, create = false) {
    if (create && this._testKey(event, ["Enter", 13])) {
      this.createAndAdd(event);
    } else if (this._testKey(event, ["ArrowDown", 40])) {
      this.moveDown();
      event.preventDefault();
    } else if (this._testKey(event, ["ArrowUp", 38])) {
      this.moveUp();
      event.preventDefault();
    } else if (this._testKey(event, ["Enter", 13])) {
      this.selectByEnter();
      event.preventDefault();
    } else if (this._testKey(event, ["Escape", "Tab", 9, 27]) && this.isOpen) {
      this.toggleOpenAndClose();
      this._focus(false);
    }
  }
  openKey(event, create = false) {
    if (create && this._testKey(event, ["Enter", 13])) {
      this.createAndAdd(event);
    } else if (this._testKey(event, ["ArrowDown", "ArrowUp", "Enter", 40, 38, 13])) {
      this.toggleOpenAndClose(true, true, event);
      event.preventDefault();
    } else if (this._testKey(event, ["Escape", "Tab", 9, 27])) {
      if (this.isOpen) {
        this.toggleOpenAndClose(false);
        this._onTouched();
        event.preventDefault();
      } else {
        this._focus(false);
      }
    }
  }
  searchUpdate(e) {
    this.searchText = e.target.value;
    if (!this.customSearchEnabled) {
      this.updateFilteredData();
    } else {
      this.search.emit({
        component: this,
        value: this._value,
        search: this.searchText,
        data: this._data,
        filteredData: (data) => {
          this.filteredData = data;
          this._changeDetectorRef.markForCheck();
        }
      });
    }
  }
  trackBy(_index, item) {
    return item.value;
  }
  isSelected(option) {
    return Select2Utils.isSelected(this.option, option, this.multiple);
  }
  isDisabled(option) {
    return option.disabled ? "true" : "false";
  }
  removeSelection(e, option) {
    Select2Utils.removeSelection(this.option, option);
    if (this.multiple && this.hideSelectedItems) {
      this.updateFilteredData();
    }
    const value = this.option.map((op) => op.value);
    if (this._control) {
      this._onChange(value);
    } else {
      this._value = value ?? null;
    }
    this.update.emit({
      component: this,
      value,
      options: Array.isArray(this.option) ? this.option : this.option ? [this.option] : null
    });
    this.removeOption.emit({
      component: this,
      value,
      removedOption: option
    });
    e.preventDefault();
    e.stopPropagation();
    if (this.isOpen) {
      this._focusSearchboxOrResultsElement();
    }
  }
  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value
   */
  writeValue(value) {
    this._setSelectionByValue(value);
  }
  /**
   * Saves a callback function to be invoked when the select's value
   * changes from user input. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the value changes.
   */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /**
   * Saves a callback function to be invoked when the select is blurred
   * by the user. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the component has been touched.
   */
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  /**
   * Sets whether the component should be disabled.
   * Implemented as part of ControlValueAccessor.
   * @param isDisabled
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  onScroll(way) {
    this.scroll.emit({
      component: this,
      way,
      search: this.innerSearchText,
      data: this._data
    });
  }
  _isErrorState() {
    const isInvalid = this._control?.invalid;
    const isTouched = this._control?.touched;
    const isSubmitted = this._parentFormGroup?.submitted || this._parentForm?.submitted;
    return !!(isInvalid && (isTouched || isSubmitted));
  }
  addItem(value) {
    let item = Select2Utils.getOptionByValue(this._data, value);
    if (!item) {
      item = {
        value,
        label: value
      };
      this._data.push(item);
    }
    return item;
  }
  createAndAdd(e) {
    const value = e.target.value;
    if (value.trim()) {
      const item = this.addItem(value.trim());
      this.click(item);
      e.target.value = "";
      this.autoCreateItem.emit({
        value: item,
        component: this,
        options: Array.isArray(this.option) ? this.option : this.option ? [this.option] : null
      });
    }
    this.stopEvent(e);
  }
  moveUp() {
    this.updateScrollFromOption(Select2Utils.getPreviousOption(this.filteredData, this.hoveringValue));
  }
  moveDown() {
    this.updateScrollFromOption(Select2Utils.getNextOption(this.filteredData, this.hoveringValue));
  }
  updateScrollFromOption(option) {
    if (option) {
      this.hoveringValue = option.value;
      const domElement = this.results.find((r) => r.nativeElement.innerText.trim() === option.label);
      if (domElement && this.resultsElement) {
        this.resultsElement.scrollTop = 0;
        const listClientRect = this.resultsElement.getBoundingClientRect();
        const optionClientRect = domElement.nativeElement.getBoundingClientRect();
        this.resultsElement.scrollTop = optionClientRect.top - listClientRect.top;
      }
    }
  }
  selectByEnter() {
    if (this.hoveringValue) {
      const option = Select2Utils.getOptionByValue(this._data, this.hoveringValue);
      this.select(option);
    }
  }
  _testKey(event, refs = []) {
    return this._isKey(this._getKey(event), refs);
  }
  _getKey(event) {
    let code;
    if (event.key !== void 0) {
      code = event.key;
    } else if (event["keyIdentifier"] !== void 0) {
      code = event["keyIdentifier"];
    } else if (event["keyCode"] !== void 0) {
      code = event["keyCode"];
    } else {
      event.preventDefault();
    }
    return code;
  }
  _isKey(code, refs = []) {
    return refs && refs.length > 0 ? refs.indexOf(code) !== -1 : false;
  }
  /**
   * Sets the selected option based on a value. If no option can be
   * found with the designated value, the select trigger is cleared.
   */
  _setSelectionByValue(value) {
    if (this.option || value !== void 0 && value !== null) {
      const isArray = Array.isArray(value);
      if (this.multiple && value && !isArray) {
        throw new Error("Non array value.");
      } else if (this._data) {
        if (this.multiple) {
          this.option = [];
          if (isArray) {
            const selectedValues = Select2Utils.getOptionsByValue(this._data, value, this.multiple);
            selectedValues.map((item) => this.select(item, false));
            this._value ??= value;
            if (this.testDiffValue(this._value, value)) {
              this.update.emit({
                component: this,
                value,
                options: Array.isArray(this.option) ? this.option : this.option ? [this.option] : null
              });
            }
          } else if (value === null) {
            this.value = [];
            this.reset();
            this.select(null, false);
            if (this.testDiffValue(this._value, value)) {
              this._value = [];
              this.update.emit({
                component: this,
                value: this._value,
                options: Array.isArray(this.option) ? this.option : this.option ? [this.option] : null
              });
            }
          }
        } else {
          this._value ??= value;
          this.select(Select2Utils.getOptionByValue(this._data, value));
        }
      } else if (this._control) {
        this._control.viewToModelUpdate(value);
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Does some manual dirty checking on the native input `value` property. */
  _dirtyCheckNativeValue() {
    const newValue = this.value;
    if (this._previousNativeValue !== newValue) {
      this._previousNativeValue = newValue;
      this._stateChanges.next();
    }
  }
  _focusSearchboxOrResultsElement(focus2 = true) {
    if (!this.isSearchboxHidden) {
      setTimeout(() => {
        if (this.searchInput && this.searchInput.nativeElement && focus2) {
          this.searchInput.nativeElement.focus();
        }
      });
      if (this.resultsElement && focus2) {
        this.resultsElement.focus();
      }
    }
  }
  _focus(state) {
    if (!state && this.focused) {
      this.focused = state;
      this.blur.emit(this);
    } else if (state && !this.focused) {
      this.focused = state;
      this.focus.emit(this);
    }
  }
  _isAbobeOverlay() {
    return this.overlay && this._overlayPosition && this.listPosition === "auto" ? this._overlayPosition === "top" : this.listPosition === "above";
  }
  static {
    this.ɵfac = function Select2_Factory(t) {
      return new (t || _Select2)(ɵɵdirectiveInject(ViewportRuler), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgForm, 8), ɵɵdirectiveInject(FormGroupDirective, 8), ɵɵdirectiveInject(NgControl, 10), ɵɵinjectAttribute("tabindex"));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Select2,
      selectors: [["select2"]],
      viewQuery: function Select2_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(CdkConnectedOverlay, 5);
          ɵɵviewQuery(_c02, 7);
          ɵɵviewQuery(_c12, 5);
          ɵɵviewQuery(_c2, 5);
          ɵɵviewQuery(_c3, 5);
          ɵɵviewQuery(_c4, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.selection = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.resultContainer = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.searchInput = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdown = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.results = _t);
        }
      },
      hostVars: 10,
      hostBindings: function Select2_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function Select2_click_HostBindingHandler($event) {
            return ctx.clickDetection($event);
          }, false, ɵɵresolveDocument);
        }
        if (rf & 2) {
          ɵɵhostProperty("id", ctx.id);
          ɵɵattribute("aria-invalid", ctx.ariaInvalid);
          ɵɵclassProp("material", ctx.classMaterial)("nostyle", ctx.classNostyle)("borderless", ctx.classBorderless)("select2-above", ctx.select2above);
        }
      },
      inputs: {
        data: "data",
        minCharForSearch: [InputFlags.HasDecoratorInputTransform, "minCharForSearch", "minCharForSearch", numberAttribute],
        displaySearchStatus: "displaySearchStatus",
        placeholder: "placeholder",
        limitSelection: [InputFlags.HasDecoratorInputTransform, "limitSelection", "limitSelection", numberAttribute],
        listPosition: "listPosition",
        multiple: [InputFlags.HasDecoratorInputTransform, "multiple", "multiple", booleanAttribute],
        overlay: [InputFlags.HasDecoratorInputTransform, "overlay", "overlay", booleanAttribute],
        styleMode: "styleMode",
        noResultMessage: "noResultMessage",
        maxResults: [InputFlags.HasDecoratorInputTransform, "maxResults", "maxResults", numberAttribute],
        maxResultsMessage: "maxResultsMessage",
        infiniteScrollDistance: [InputFlags.HasDecoratorInputTransform, "infiniteScrollDistance", "infiniteScrollDistance", numberAttribute],
        infiniteScrollThrottle: [InputFlags.HasDecoratorInputTransform, "infiniteScrollThrottle", "infiniteScrollThrottle", numberAttribute],
        infiniteScroll: [InputFlags.HasDecoratorInputTransform, "infiniteScroll", "infiniteScroll", booleanAttribute],
        autoCreate: [InputFlags.HasDecoratorInputTransform, "autoCreate", "autoCreate", booleanAttribute],
        noLabelTemplate: [InputFlags.HasDecoratorInputTransform, "noLabelTemplate", "noLabelTemplate", booleanAttribute],
        editPattern: "editPattern",
        templates: "templates",
        templateSelection: "templateSelection",
        resultMaxHeight: "resultMaxHeight",
        customSearchEnabled: [InputFlags.HasDecoratorInputTransform, "customSearchEnabled", "customSearchEnabled", booleanAttribute],
        minCountForSearch: [InputFlags.HasDecoratorInputTransform, "minCountForSearch", "minCountForSearch", numberAttribute],
        id: "id",
        required: [InputFlags.HasDecoratorInputTransform, "required", "required", booleanAttribute],
        disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
        hideSelectedItems: [InputFlags.HasDecoratorInputTransform, "hideSelectedItems", "hideSelectedItems", booleanAttribute],
        readonly: [InputFlags.HasDecoratorInputTransform, "readonly", "readonly", booleanAttribute],
        value: "value",
        tabIndex: [InputFlags.HasDecoratorInputTransform, "tabIndex", "tabIndex", numberAttribute],
        resettable: [InputFlags.HasDecoratorInputTransform, "resettable", "resettable", booleanAttribute],
        resetSelectedValue: "resetSelectedValue",
        grid: "grid"
      },
      outputs: {
        update: "update",
        autoCreateItem: "autoCreateItem",
        open: "open",
        close: "close",
        focus: "focus",
        blur: "blur",
        search: "search",
        scroll: "scroll",
        removeOption: "removeOption"
      },
      features: [ɵɵInputTransformsFeature],
      ngContentSelectors: _c6,
      decls: 18,
      vars: 28,
      consts: [["selection", "", "trigger", "cdkOverlayOrigin"], ["containerTemplate", ""], ["dropdown", ""], ["searchInput", ""], ["results", ""], ["result", ""], ["li", ""], [1, "select2-label", 3, "click"], [1, "select2-required"], [1, "select2", "select2-container", "select2-container--default"], ["cdkOverlayOrigin", "", 1, "selection", 3, "click", "focus", "blur", "keydown", "tabindex"], ["role", "combobox", 1, "select2-selection"], [1, "select2-selection__rendered", 3, "title"], ["role", "presentation", 1, "select2-selection__reset"], ["role", "presentation", 1, "select2-selection__arrow"], [1, "select2-selection__rendered"], [1, "select2-subscript-wrapper"], ["cdkConnectedOverlay", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "select2-overlay-backdrop", 3, "backdropClick", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayHeight", "cdkConnectedOverlayPositions"], [1, "select2-selection__placeholder"], [3, "innerHTML"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "presentation", 1, "select2-selection__reset", 3, "click"], [1, "select2-selection__placeholder", 3, "select2-selection__placeholder__option"], ["tabindex", "0", 1, "select2-selection__choice", 3, "title"], [1, "select2-selection__auto-create"], ["tabindex", "0", 1, "select2-selection__choice", 3, "keydown.enter", "title"], ["role", "presentation", 1, "select2-selection__choice__remove"], ["role", "presentation", 1, "select2-selection__choice__remove", 3, "click"], [1, "select2-selection__auto-create", 3, "focus", "blur"], ["type", "search", "role", "textbox", "autocomplete", "off", "autocorrect", "off", "autocapitalize", "off", "spellcheck", "false", 1, "select2-create__field", 3, "click", "keydown", "keyup", "change", "id"], [4, "ngTemplateOutlet"], [1, "select2-container", "select2-container--default", "select2-container-dropdown"], [1, "select2-dropdown"], [1, "select2-search", "select2-search--dropdown"], ["type", "search", "role", "textbox", "autocomplete", "off", "autocorrect", "off", "autocapitalize", "off", "spellcheck", "false", 1, "select2-search__field", 3, "keydown", "keyup", "change", "id", "value"], [1, "select2-results"], ["role", "tree", "tabindex", "-1", "infiniteScroll", "", 1, "select2-results__options", 3, "scrolled", "scrolledUp", "keydown", "infiniteScrollDisabled", "infiniteScrollDistance", "infiniteScrollThrottle", "infiniteScrollContainer"], [1, "select2-no-result", "select2-results__option", 3, "innerHTML"], [1, "select2-too-much-result", "select2-results__option", 3, "innerHTML"], ["role", "group", 1, "select2-results__option"], [1, "select2-results__options", "select2-results__options--nested"], ["role", "treeitem", 3, "id", "class"], ["role", "treeitem", 3, "mouseenter", "click", "id"], [1, "select2-label-content", 3, "innerHTML"]],
      template: function Select2_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef(_c5);
          ɵɵelementStart(0, "div", 7);
          ɵɵlistener("click", function Select2_Template_div_click_0_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.toggleOpenAndClose());
          });
          ɵɵprojection(1);
          ɵɵtemplate(2, Select2_Conditional_2_Template, 1, 0, "span", 8);
          ɵɵelementEnd();
          ɵɵelementStart(3, "div", 9)(4, "div", 10, 0);
          ɵɵlistener("click", function Select2_Template_div_click_4_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.toggleOpenAndClose());
          })("focus", function Select2_Template_div_focus_4_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.focusin());
          })("blur", function Select2_Template_div_blur_4_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.focusout());
          })("keydown", function Select2_Template_div_keydown_4_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.openKey($event));
          });
          ɵɵelementStart(7, "div", 11);
          ɵɵtemplate(8, Select2_Conditional_8_Template, 5, 6, "span", 12)(9, Select2_Conditional_9_Template, 2, 0, "span", 13)(10, Select2_Conditional_10_Template, 1, 0, "span", 14)(11, Select2_Conditional_11_Template, 5, 3, "ul", 15);
          ɵɵelementEnd()();
          ɵɵtemplate(12, Select2_Conditional_12_Template, 1, 1, "ng-container");
          ɵɵelementStart(13, "div", 16);
          ɵɵprojection(14, 1);
          ɵɵelementEnd()();
          ɵɵtemplate(15, Select2_ng_template_15_Template, 1, 1, "ng-template", 17);
          ɵɵlistener("backdropClick", function Select2_Template_ng_template_backdropClick_15_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.toggleOpenAndClose());
          });
          ɵɵtemplate(16, Select2_ng_template_16_Template, 13, 31, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const trigger_r18 = ɵɵreference(6);
          ɵɵadvance(2);
          ɵɵconditional(2, ctx.required ? 2 : -1);
          ɵɵadvance();
          ɵɵclassProp("select2-container--focus", ctx.focused)("select2-container--below", !ctx.select2above)("select2-container--above", ctx.select2above)("select2-container--open", ctx.isOpen)("select2-container--disabled", ctx.disabled);
          ɵɵadvance();
          ɵɵclassProp("select2-focused", ctx.focused);
          ɵɵproperty("tabindex", !ctx.isOpen ? ctx.tabIndex : "-1");
          ɵɵadvance(3);
          ɵɵclassProp("select2-selection--multiple", ctx.multiple)("select2-selection--single", !ctx.multiple);
          ɵɵadvance();
          ɵɵconditional(8, !ctx.multiple ? 8 : -1);
          ɵɵadvance();
          ɵɵconditional(9, !ctx.multiple && ctx.resettable && ctx.resetSelectedValue !== ctx.value && ctx.select2Option && !(ctx.disabled || ctx.readonly) ? 9 : -1);
          ɵɵadvance();
          ɵɵconditional(10, !ctx.multiple ? 10 : -1);
          ɵɵadvance();
          ɵɵconditional(11, ctx.multiple ? 11 : -1);
          ɵɵadvance();
          ɵɵconditional(12, !ctx.overlay ? 12 : -1);
          ɵɵadvance(3);
          ɵɵproperty("cdkConnectedOverlayOrigin", trigger_r18)("cdkConnectedOverlayOpen", ctx.isOpen && ctx.overlay)("cdkConnectedOverlayMinWidth", ctx.overlayWidth)("cdkConnectedOverlayHeight", ctx.overlayHeight)("cdkConnectedOverlayPositions", ctx._positions);
        }
      },
      dependencies: [NgTemplateOutlet, CdkConnectedOverlay, CdkOverlayOrigin, InfiniteScrollDirective],
      styles: ['.select2-label[_ngcontent-%COMP%]{color:var(--select2-label-text-color, #000)}.select2-container[_ngcontent-%COMP%]{box-sizing:border-box;display:inline-block;margin:0;position:relative;vertical-align:middle;width:100%}.select2-container[_ngcontent-%COMP%]   .select2-container-dropdown[_ngcontent-%COMP%]{position:absolute;width:0px;opacity:0}.select2-container[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]{box-sizing:border-box;cursor:pointer;display:block;height:var(--select2-single-height, 28px);-webkit-user-select:none;user-select:none}.select2-container[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%]{display:block;padding:var(--select2-selection-padding, 0 0 0 8px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1 1 auto}.select2-container[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__clear[_ngcontent-%COMP%]{position:relative}.select2-container[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]{box-sizing:border-box;cursor:pointer;display:block;min-height:var(--select2-multiple-height, 28px);-webkit-user-select:none;user-select:none}.select2-container[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%]{display:inline-flex;overflow:hidden;padding-left:8px;padding-bottom:2px;text-overflow:ellipsis;white-space:nowrap;flex-wrap:wrap;gap:var(--select2-selection-multiple-gap, 2px 5px)}.select2-container[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%]   .select2-selection__auto-create[_ngcontent-%COMP%]{flex:1 1 150px;min-width:150px;display:flex}.select2-container[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%]   .select2-create__field[_ngcontent-%COMP%]{width:100%;border:0}.select2-container[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%]   .select2-create__field[_ngcontent-%COMP%]:focus{border:0;outline:0}.select2-container[_ngcontent-%COMP%]   .select2-search--inline[_ngcontent-%COMP%]{float:left}.select2-container[_ngcontent-%COMP%]   .select2-search--inline[_ngcontent-%COMP%]   .select2-search__field[_ngcontent-%COMP%]{box-sizing:border-box;border:none;font-size:100%;margin-top:5px;padding:0}.select2-container[_ngcontent-%COMP%]   .select2-search--inline[_ngcontent-%COMP%]   .select2-search__field[_ngcontent-%COMP%]::-webkit-search-cancel-button{-webkit-appearance:none}.select2-dropdown[_ngcontent-%COMP%]{background:var(--select2-dropdown-background, white);border:1px solid var(--select2-dropdown-border-color, #aaa);border-radius:var(--select2-selection-border-radius, 4px);box-sizing:border-box;display:block;position:absolute;width:100%;z-index:1051;height:0;overflow:hidden}.select2-dropdown[_ngcontent-%COMP%]   .select2-label-content[_ngcontent-%COMP%]{display:contents}.select2-results[_ngcontent-%COMP%]{display:block}.select2-results__options[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}.select2-results__option[_ngcontent-%COMP%]{padding:var(--select2-option-padding, 6px);-webkit-user-select:none;user-select:none;color:var(--select2-option-text-color, #000)}.select2-results__option[aria-selected][_ngcontent-%COMP%]{cursor:pointer}.select2-container.select2-container-dropdown.select2-container--open[_ngcontent-%COMP%]{width:100%;opacity:1}.select2-container--open[_ngcontent-%COMP%]   .select2-dropdown[_ngcontent-%COMP%]{overflow:auto;height:auto}.select2-container--open[_ngcontent-%COMP%]   .select2-dropdown--above[_ngcontent-%COMP%]{border-bottom:var(--select2-dropdown-above-border-bottom, none);border-bottom-left-radius:var(--select2-dropdown-above-border-bottom-left-radius, 0);border-bottom-right-radius:var(--select2-dropdown-above-border-bottom-right-radius, 0);bottom:27px;display:flex;flex-direction:column-reverse}.select2-container--open[_ngcontent-%COMP%]   .select2-dropdown--below[_ngcontent-%COMP%]{border-top:var(--select2-dropdown-below-border-top, none);border-top-left-radius:var(--select2-dropdown-below-border-top-left-radius, 0);border-top-right-radius:var(--select2-dropdown-below-border-top-right-radius, 0)}.select2-search--dropdown[_ngcontent-%COMP%]{display:block;padding:4px}.select2-search--dropdown[_ngcontent-%COMP%]   .select2-search__field[_ngcontent-%COMP%]{padding:4px;width:100%;box-sizing:border-box}.select2-search--dropdown[_ngcontent-%COMP%]   .select2-search__field[_ngcontent-%COMP%]::-webkit-search-cancel-button{-webkit-appearance:none}.select2-search--dropdown.select2-search--hide[_ngcontent-%COMP%]{display:none}.select2-close-mask[_ngcontent-%COMP%]{border:0;margin:0;padding:0;display:block;position:fixed;left:0;top:0;min-height:100%;min-width:100%;height:auto;width:auto;opacity:0;z-index:99}.select2-required[_ngcontent-%COMP%]:before{content:"*";color:var(--select2-required-color, red)}.select2-hidden-accessible[_ngcontent-%COMP%]{border:0!important;clip:rect(0 0 0 0)!important;height:1px!important;margin:-1px!important;overflow:hidden!important;padding:0!important;position:absolute!important;width:1px!important}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]{background:var(--select2-selection-background, #fff);border:1px solid var(--select2-selection-border-color, #aaa);border-radius:var(--select2-selection-border-radius, 4px);display:flex}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%]{color:var(--select2-selection-text-color, #111);line-height:var(--select2-selection-line-height, 28px)}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__clear[_ngcontent-%COMP%]{cursor:pointer;float:right;font-weight:700}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__placeholder[_ngcontent-%COMP%]{color:var(--select2-placeholder-color, #999)}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__placeholder[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{overflow:hidden;white-space:nowrap;text-overflow:var(--select2-placeholder-overflow, ellipsis)}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__placeholder__option[_ngcontent-%COMP%]{display:none}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__reset[_ngcontent-%COMP%], .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__arrow[_ngcontent-%COMP%]{display:flex;width:20px;align-items:center;justify-content:center}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__arrow[_ngcontent-%COMP%]:before{content:" ";border-color:var(--select2-arrow-color, #888) transparent;border-style:solid;border-width:5px 4px 0;height:0;width:0}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__reset[_ngcontent-%COMP%]{color:var(--select2-reset-color, #999)}.select2-container--default.select2-container--disabled[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]{background:var(--select2-selection-disabled-background, #eee);cursor:default}.select2-container--default.select2-container--disabled[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__clear[_ngcontent-%COMP%]{display:none}.select2-container--default.select2-container--open[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__arrow[_ngcontent-%COMP%]:before{border-color:transparent transparent var(--select2-arrow-color, #888);border-width:0 4px 5px}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]{background:var(--select2-selection-background, #fff);border:1px solid var(--select2-selection-border-color, #aaa);border-radius:var(--select2-selection-border-radius, 4px);cursor:text;display:flex}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%]{flex:1 1 auto;box-sizing:border-box;list-style:none;margin:0;padding:var(--select2-selection-multiple-padding, 2px 5px);width:100%;min-height:1em;align-items:center}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;line-height:var(--select2-selection-choice-line-height, 20px)}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__placeholder[_ngcontent-%COMP%]{display:block;width:100%;color:var(--select2-placeholder-color, #999);margin-top:5px;float:left;overflow:hidden;white-space:nowrap;text-overflow:var(--select2-placeholder-overflow, ellipsis)}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__placeholder__option[_ngcontent-%COMP%]{display:none}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__clear[_ngcontent-%COMP%]{cursor:pointer;float:right;font-weight:700;margin-top:5px;margin-right:10px}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__choice[_ngcontent-%COMP%]{color:var(--select2-selection-choice-text-color, #000);background:var(--select2-selection-choice-background, #e4e4e4);border:1px solid var(--select2-selection-choice-border-color, #aaa);border-radius:var(--select2-selection-border-radius, 4px);cursor:default;padding:0 5px}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__choice__remove[_ngcontent-%COMP%]{color:var(--select2-selection-choice-close-color, #999);cursor:pointer;display:inline-block;font-weight:700;margin-right:2px}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__choice__remove[_ngcontent-%COMP%]:hover{color:var(--select2-selection-choice-hover-close-color, #333)}.select2-container--default.select2-container--focused[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]{border:solid var(--select2-selection-focus-border-color, #000) 1px;outline:none}.select2-container--default[_ngcontent-%COMP%]:not(.select2-container--open)   .select2-focused[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], .select2-container--default[_ngcontent-%COMP%]:not(.select2-container--open)   .select2-focused[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]{border:solid var(--select2-selection-focus-border-color, #000) 1px;outline:none}.select2-container--default.select2-container--disabled[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]{background:var(--select2-selection-disabled-background, #eee);cursor:default}.select2-container--default.select2-container--disabled[_ngcontent-%COMP%]   .select2-selection__choice__remove[_ngcontent-%COMP%]{display:none}.select2-container--default.select2-container--open.select2-container--above[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], .select2-container--default.select2-container--open.select2-container--above[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]{border-top-left-radius:0;border-top-right-radius:0}.select2-container--default.select2-container--open.select2-container--below[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], .select2-container--default.select2-container--open.select2-container--below[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]{border-bottom-left-radius:0;border-bottom-right-radius:0}.select2-container--default[_ngcontent-%COMP%]   .select2-search--dropdown[_ngcontent-%COMP%]   .select2-search__field[_ngcontent-%COMP%]{border:1px solid var(--select2-search-border-color, #aaa);background:1px solid var(--select2-search-background, #fff);border-radius:var(--select2-search-border-radius, 0px)}.select2-container--default[_ngcontent-%COMP%]   .select2-search--inline[_ngcontent-%COMP%]   .select2-search__field[_ngcontent-%COMP%]{background:transparent;border:none;outline:none;box-shadow:none;-webkit-appearance:textfield}.select2-container--default[_ngcontent-%COMP%]   .select2-results[_ngcontent-%COMP%] > .select2-results__options[_ngcontent-%COMP%]{overflow-y:auto}.select2-container--default[_ngcontent-%COMP%]   .select2-results__option[role=group][_ngcontent-%COMP%]{padding:0;grid-column:col-start/col-end}.select2-container--default[_ngcontent-%COMP%]   .select2-results__option[aria-disabled=true][_ngcontent-%COMP%]{color:var(--select2-option-disabled-text-color, #999);background:var(--select2-option-disabled-background, transparent)}.select2-container--default[_ngcontent-%COMP%]   .select2-results__option[aria-selected=true][_ngcontent-%COMP%]{color:var(--select2-option-selected-text-color, #000);background:var(--select2-option-selected-background, #ddd)}.select2-container--default[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]{padding-left:1em}.select2-container--default[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__group[_ngcontent-%COMP%]{padding-left:0}.select2-container--default[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]{margin-left:-1em;padding-left:2em}.select2-container--default[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]{margin-left:-2em;padding-left:3em}.select2-container--default[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]{margin-left:-3em;padding-left:4em}.select2-container--default[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]{margin-left:-4em;padding-left:5em}.select2-container--default[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]{margin-left:-5em;padding-left:6em}.select2-container--default[_ngcontent-%COMP%]   .select2-results__option--highlighted[aria-selected][_ngcontent-%COMP%]{background:var(--select2-option-highlighted-background, #5897fb);color:var(--select2-option-highlighted-text-color, #fff)}.select2-container--default[_ngcontent-%COMP%]   .select2-results__option--hide[_ngcontent-%COMP%]{display:none}.select2-container--default[_ngcontent-%COMP%]   .select2-results__group[_ngcontent-%COMP%]{cursor:default;display:block;padding:6px;color:var(--select2-option-group-text-color, gray);background:var(--select2-option-group-background, transparent)}.select2-no-result[_ngcontent-%COMP%]{color:var(--select2-no-result-color, #888);font-style:var(--select2-no-result-font-style, italic)}.select2-too-much-result[_ngcontent-%COMP%]{color:var(--select2-too-much-result-color, #888);font-style:var(--select2-too-much-font-style, italic)}.select2-grid[_ngcontent-%COMP%], .select2-grid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:grid;grid-template-columns:[col-start] repeat(var(--grid-size),1fr) [col-end]}.select2-grid-auto[_ngcontent-%COMP%], .select2-grid-auto[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:grid;grid-template-columns:[col-start] repeat(auto-fill,minmax(var(--grid-size, 100px),1fr)) [col-end]}.select2-container--default[_ngcontent-%COMP%]   .select2-grid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .select2-container--default[_ngcontent-%COMP%]   .select2-grid-auto[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:var(--select2-option-padding, 6px)}.select2-container--default[_ngcontent-%COMP%]   .select2-grid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .select2-results__group[_ngcontent-%COMP%], .select2-container--default[_ngcontent-%COMP%]   .select2-grid-auto[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .select2-results__group[_ngcontent-%COMP%]{padding-left:0}.select2-container--default[_ngcontent-%COMP%]   .select2-grid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%], .select2-container--default[_ngcontent-%COMP%]   .select2-grid-auto[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%], .select2-container--default[_ngcontent-%COMP%]   .select2-grid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%], .select2-container--default[_ngcontent-%COMP%]   .select2-grid-auto[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%], .select2-container--default[_ngcontent-%COMP%]   .select2-grid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%], .select2-container--default[_ngcontent-%COMP%]   .select2-grid-auto[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%], .select2-container--default[_ngcontent-%COMP%]   .select2-grid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%], .select2-container--default[_ngcontent-%COMP%]   .select2-grid-auto[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%], .select2-container--default[_ngcontent-%COMP%]   .select2-grid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%], .select2-container--default[_ngcontent-%COMP%]   .select2-grid-auto[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]{padding-left:var(--select2-option-padding, 6px)}.nostyle[_nghost-%COMP%]   .select2-dropdown[_ngcontent-%COMP%]{border-color:transparent}.nostyle[_nghost-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], .nostyle[_nghost-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]{background:transparent;border-color:transparent}.nostyle[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-focused[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], .nostyle[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-focused[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%], .nostyle[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]:not(.select2-container--open)   .select2-focused[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], .nostyle[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]:not(.select2-container--open)   .select2-focused[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]{background:transparent;border-color:transparent}.borderless[_nghost-%COMP%]{--select2-dropdown-above-border-bottom: 1px solid var(--select2-dropdown-border-color, #aaa);--select2-dropdown-above-border-bottom-left-radius: var(--select2-selection-border-radius, 4px);--select2-dropdown-above-border-bottom-right-radius: var(--select2-selection-border-radius, 4px);--select2-dropdown-below-border-top: 1px solid var(--select2-dropdown-border-color, #aaa);--select2-dropdown-below-border-top-left-radius: var(--select2-selection-border-radius, 4px);--select2-dropdown-below-border-top-right-radius: var(--select2-selection-border-radius, 4px)}.borderless[_nghost-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], .borderless[_nghost-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]{background:transparent;border-color:transparent}.borderless[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-focused[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], .borderless[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-focused[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%], .borderless[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]:not(.select2-container--open)   .select2-focused[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], .borderless[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]:not(.select2-container--open)   .select2-focused[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]{background:transparent;border-color:transparent}.material[_nghost-%COMP%]{display:inline-block;width:300px}.material[_nghost-%COMP%] > .select2-container[_ngcontent-%COMP%]{padding-bottom:1.29688em;vertical-align:inherit}.material[_nghost-%COMP%] > .select2-container[_ngcontent-%COMP%]   .selection[_ngcontent-%COMP%]{padding:.4375em 0;border-top:.84375em solid transparent;display:inline-flex;align-items:baseline;width:100%;height:auto}.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], .material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]{width:100%;border:0;border-radius:0;height:24px;box-sizing:border-box}.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]:before, .material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]:before{content:" ";display:block;position:absolute;bottom:1.65em;background:var(--select2-material-underline, #ddd);height:1px;width:100%}.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]:after, .material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]:after{content:" ";display:block;position:absolute;bottom:1.63em;background:var(--select2-material-underline-active, #5a419e);height:2px;width:0%;left:50%;transition:none}.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%], .material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%]{padding-left:1px;line-height:inherit}.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__placeholder[_ngcontent-%COMP%], .material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__placeholder[_ngcontent-%COMP%]{display:block;color:var(--select2-material-placeholder-color, rgba(0, 0, 0, .38));transition:transform .3s;position:absolute;transform-origin:0 21px;left:0;top:20px}.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-container--open[_ngcontent-%COMP%]{left:0;bottom:1.6em}.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection__placeholder__option[_ngcontent-%COMP%]{transform:translateY(-1.5em) scale(.75) perspective(100px) translateZ(.001px);width:133.33333%}.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection__arrow[_ngcontent-%COMP%]{top:20px}.material[_nghost-%COMP%]   .select2-container--default.select2-container--open[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]:after, .material[_nghost-%COMP%]   .select2-container--default.select2-container--open[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]:after, .material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-focused[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]:after, .material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-focused[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]:after{transition:width .3s cubic-bezier(.12,1,.77,1),left .3s cubic-bezier(.12,1,.77,1);width:100%;left:0%}.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-dropdown[_ngcontent-%COMP%]{border-radius:0;border:0;box-shadow:0 5px 5px #00000080}.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-results__option[aria-selected=true][_ngcontent-%COMP%], .material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-results__option--highlighted[aria-selected][_ngcontent-%COMP%]{background:var(--select2-material-option-selected-background, rgba(0, 0, 0, .04));color:var(--select2-material-option-highlighted-text-color, #000)}.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-results__option[aria-selected=true][_ngcontent-%COMP%]{color:var(--select2-material-option-selected-text-color, #ff5722)}.material[_nghost-%COMP%]   .select2-container--default.select2-container--disabled[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], .material[_nghost-%COMP%]   .select2-container--default.select2-container--disabled[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]{background:transparent}.material[_nghost-%COMP%]   .select2-container--default.select2-container--disabled[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]:before, .material[_nghost-%COMP%]   .select2-container--default.select2-container--disabled[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]:before{background:var(--select2-material-underline-disabled, linear-gradient(to right, rgba(0, 0, 0, .26) 0, rgba(0, 0, 0, .26) 33%, transparent 0));background-size:4px 1px;background-repeat:repeat-x;background-position:0 bottom}.material.ng-invalid.ng-touched[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]:before, .material.ng-invalid.ng-touched[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]:after, .material.ng-invalid.ng-touched[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]:before, .material.ng-invalid.ng-touched[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]:after{background:var(--select2-material-underline-invalid, red)}.material[_nghost-%COMP%]:not(.select2-container--open)   .select2-focused[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], .material[_nghost-%COMP%]:not(.select2-container--open)   .select2-focused[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]{border:0}.material[_nghost-%COMP%]   .select2-subscript-wrapper[_ngcontent-%COMP%]{position:absolute;top:calc(100% - 1.72917em);font-size:75%;color:var(--select2-hint-text-color, #888)}  .select2-overlay-backdrop{background:var(--select2-overlay-backdrop, transparent)}  .cdk-overlay-container .select2-container .select2-dropdown.select2-dropdown--above{bottom:28px}  .cdk-overlay-container .select2-container--open.select2-position-auto .select2-dropdown{margin-bottom:28px}  .cdk-overlay-container .select2-container--open.select2-position-auto .select2-dropdown.select2-dropdown--above{bottom:0;margin-bottom:0;margin-top:28px}  .cdk-overlay-container .select2-style-borderless{--select2-dropdown-above-border-bottom: 1px solid var(--select2-dropdown-border-color, #aaa);--select2-dropdown-above-border-bottom-left-radius: var(--select2-selection-border-radius, 4px);--select2-dropdown-above-border-bottom-right-radius: var(--select2-selection-border-radius, 4px);--select2-dropdown-below-border-top: 1px solid var(--select2-dropdown-border-color, #aaa);--select2-dropdown-below-border-top-left-radius: var(--select2-selection-border-radius, 4px);--select2-dropdown-below-border-top-right-radius: var(--select2-selection-border-radius, 4px)}@supports (-moz-appearance: none){select2.material[_ngcontent-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], select2.material[_ngcontent-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]{height:26px}}']
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Select2, [{
    type: Component,
    args: [{
      selector: "select2",
      template: `<div class="select2-label" (click)="toggleOpenAndClose()">
    <ng-content select="select2-label"></ng-content>
    @if (required) {
        <span class="select2-required"></span>
    }
</div>

<div
    class="select2 select2-container select2-container--default"
    [class.select2-container--focus]="focused"
    [class.select2-container--below]="!select2above"
    [class.select2-container--above]="select2above"
    [class.select2-container--open]="isOpen"
    [class.select2-container--disabled]="disabled"
>
    <div
        class="selection"
        #selection
        #trigger="cdkOverlayOrigin"
        [tabindex]="!this.isOpen ? tabIndex : '-1'"
        (click)="toggleOpenAndClose()"
        (focus)="focusin()"
        (blur)="focusout()"
        (keydown)="openKey($event)"
        cdkOverlayOrigin
        [class.select2-focused]="focused"
    >
        <div
            class="select2-selection"
            [class.select2-selection--multiple]="multiple"
            [class.select2-selection--single]="!multiple"
            role="combobox"
        >
            @if (!multiple) {
                <span class="select2-selection__rendered" [title]="select2Option?.label || ''">
                    @if (!select2Option) {
                        <span>&nbsp;</span>
                    }
                    @if (select2Option) {
                        @if (!hasTemplate(select2Option, 'option', true) || noLabelTemplate) {
                            <span [innerHTML]="select2Option.label"></span>
                        } @else {
                            <ng-container
                                *ngTemplateOutlet="getTemplate(select2Option, 'option', true); context: select2Option"
                            ></ng-container>
                        }
                    }
                    <span
                        [class.select2-selection__placeholder__option]="option"
                        class="select2-selection__placeholder"
                        >{{ placeholder }}</span
                    >
                </span>
            }
            @if (!multiple && resettable && resetSelectedValue !== value && select2Option && !(disabled || readonly)) {
                <span (click)="reset($event)" class="select2-selection__reset" role="presentation">×</span>
            }
            @if (!multiple) {
                <span class="select2-selection__arrow" role="presentation"> </span>
            }
            @if (multiple) {
                <ul class="select2-selection__rendered">
                    @if (!autoCreate) {
                        <span
                            [class.select2-selection__placeholder__option]="select2Options?.length > 0"
                            class="select2-selection__placeholder"
                            >{{ placeholder }}</span
                        >
                    }
                    @for (op of option || []; track trackBy($index, op)) {
                        <li
                            class="select2-selection__choice"
                            [title]="op.label"
                            tabindex="0"
                            (keydown.enter)="removeSelection($event, op)"
                        >
                            @if (!(disabled || readonly)) {
                                <span
                                    (click)="removeSelection($event, op)"
                                    class="select2-selection__choice__remove"
                                    role="presentation"
                                    >×</span
                                >
                            }
                            @if (!hasTemplate(op, 'option', true) || noLabelTemplate) {
                                <span [innerHTML]="op.label"></span>
                            } @else {
                                <ng-container
                                    *ngTemplateOutlet="getTemplate(op, 'option', true); context: op"
                                ></ng-container>
                            }
                        </li>
                    }
                    @if (autoCreate) {
                        <li
                            class="select2-selection__auto-create"
                            (focus)="stopEvent($event)"
                            (blur)="stopEvent($event)"
                        >
                            <input
                                [id]="id + '-create-field'"
                                (click)="toggleOpenAndClose(false, true); stopEvent($event)"
                                (keydown)="keyDown($event, true)"
                                (keyup)="searchUpdate($event)"
                                (change)="prevChange($event)"
                                class="select2-create__field"
                                type="search"
                                role="textbox"
                                autocomplete="off"
                                autocorrect="off"
                                autocapitalize="off"
                                spellcheck="false"
                            />
                        </li>
                    }
                </ul>
            }
        </div>
    </div>
    @if (!overlay) {
        <ng-container *ngTemplateOutlet="containerTemplate"></ng-container>
    }

    <div class="select2-subscript-wrapper">
        <ng-content select="select2-hint"></ng-content>
    </div>
</div>

<ng-template
    cdkConnectedOverlay
    cdkConnectedOverlayHasBackdrop
    cdkConnectedOverlayBackdropClass="select2-overlay-backdrop"
    [cdkConnectedOverlayOrigin]="trigger"
    [cdkConnectedOverlayOpen]="this.isOpen && overlay"
    [cdkConnectedOverlayMinWidth]="overlayWidth"
    [cdkConnectedOverlayHeight]="overlayHeight"
    [cdkConnectedOverlayPositions]="_positions"
    (backdropClick)="toggleOpenAndClose()"
>
    <ng-container *ngTemplateOutlet="containerTemplate"></ng-container>
</ng-template>

<ng-template #containerTemplate>
    <div
        class="select2-container select2-container--default select2-container-dropdown"
        [class.select2-container--open]="isOpen"
        [class.select2-overlay]="overlay"
        [class.select2-position-auto]="listPosition === 'auto'"
        [class.select2-style-borderless]="styleMode === 'borderless'"
    >
        <div
            #dropdown
            class="select2-dropdown"
            [class.select2-dropdown--below]="!select2above"
            [class.select2-dropdown--above]="select2above"
        >
            <div class="select2-search select2-search--dropdown" [class.select2-search--hide]="hideSearch()">
                <input
                    #searchInput
                    [id]="id + '-search-field'"
                    [value]="searchText"
                    (keydown)="keyDown($event, autoCreate)"
                    (keyup)="searchUpdate($event)"
                    (change)="prevChange($event)"
                    class="select2-search__field"
                    type="search"
                    role="textbox"
                    autocomplete="off"
                    autocorrect="off"
                    autocapitalize="off"
                    spellcheck="false"
                    [attr.tabindex]="this.isOpen ? tabIndex : '-1'"
                />
            </div>
            <div class="select2-results">
                <ul
                    #results
                    class="select2-results__options"
                    [class.select2-grid]="grid && isNumber(grid)"
                    [class.select2-grid-auto]="grid && !isNumber(grid)"
                    [style.max-height]="resultMaxHeight"
                    [style.--grid-size]="grid || null"
                    role="tree"
                    tabindex="-1"
                    infiniteScroll
                    [infiniteScrollDisabled]="!infiniteScroll && !isOpen"
                    [infiniteScrollDistance]="infiniteScrollDistance"
                    [infiniteScrollThrottle]="infiniteScrollThrottle"
                    [infiniteScrollContainer]="results"
                    (scrolled)="onScroll('down')"
                    (scrolledUp)="onScroll('up')"
                    (keydown)="keyDown($event)"
                >
                    @for (groupOrOption of filteredData; track trackBy(i, groupOrOption); let i = $index) {
                        @if (groupOrOption.options !== undefined) {
                            <li class="select2-results__option" role="group">
                                @if (!hasTemplate(groupOrOption, 'group')) {
                                    <strong
                                        [attr.class]="
                                            'select2-results__group' +
                                            (groupOrOption.classes ? ' ' + groupOrOption.classes : '')
                                        "
                                        [innerHTML]="groupOrOption.label"
                                    ></strong>
                                } @else {
                                    <ng-container
                                        *ngTemplateOutlet="getTemplate(groupOrOption, 'group'); context: groupOrOption"
                                    >
                                    </ng-container>
                                }
                                <ul class="select2-results__options select2-results__options--nested">
                                    @for (option of groupOrOption.options; track trackBy(j, option); let j = $index) {
                                        <li
                                            #result
                                            [id]="option.id || id + '-option-' + i + '-' + j"
                                            [class]="getOptionStyle(option)"
                                            role="treeitem"
                                            [attr.aria-selected]="isSelected(option)"
                                            [attr.aria-disabled]="isDisabled(option)"
                                            (mouseenter)="mouseenter(option)"
                                            (click)="click(option)"
                                        >
                                            @if (!hasTemplate(option, 'option')) {
                                                <div class="select2-label-content" [innerHTML]="option.label"></div>
                                            } @else {
                                                <ng-container
                                                    *ngTemplateOutlet="getTemplate(option, 'option'); context: option"
                                                >
                                                </ng-container>
                                            }
                                        </li>
                                    }
                                </ul>
                            </li>
                        } @else {
                            <li
                                #result
                                [id]="groupOrOption.id || id + '-option-' + i"
                                [class]="getOptionStyle(groupOrOption)"
                                role="treeitem"
                                [attr.aria-selected]="isSelected(groupOrOption)"
                                [attr.aria-disabled]="isDisabled(groupOrOption)"
                                (mouseenter)="mouseenter(groupOrOption)"
                                (click)="click(groupOrOption)"
                            >
                                @if (!hasTemplate(groupOrOption, 'option')) {
                                    <div [innerHTML]="groupOrOption.label" class="select2-label-content"></div>
                                } @else {
                                    <ng-container
                                        *ngTemplateOutlet="getTemplate(groupOrOption, 'option'); context: groupOrOption"
                                    >
                                    </ng-container>
                                }
                                <ng-template #li>
                                    <ng-container
                                        *ngTemplateOutlet="getTemplate(groupOrOption, 'option'); context: groupOrOption"
                                    >
                                    </ng-container>
                                </ng-template>
                            </li>
                        }
                    }
                    @if (!filteredData?.length && noResultMessage) {
                        <li class="select2-no-result select2-results__option" [innerHTML]="noResultMessage"></li>
                    }
                    @if (maxResultsExceeded) {
                        <li
                            class="select2-too-much-result select2-results__option"
                            [innerHTML]="maxResultsMessage"
                        ></li>
                    }
                </ul>
            </div>
        </div>
    </div>
</ng-template>
`,
      styles: ['.select2-label{color:var(--select2-label-text-color, #000)}.select2-container{box-sizing:border-box;display:inline-block;margin:0;position:relative;vertical-align:middle;width:100%}.select2-container .select2-container-dropdown{position:absolute;width:0px;opacity:0}.select2-container .select2-selection--single{box-sizing:border-box;cursor:pointer;display:block;height:var(--select2-single-height, 28px);-webkit-user-select:none;user-select:none}.select2-container .select2-selection--single .select2-selection__rendered{display:block;padding:var(--select2-selection-padding, 0 0 0 8px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1 1 auto}.select2-container .select2-selection--single .select2-selection__clear{position:relative}.select2-container .select2-selection--multiple{box-sizing:border-box;cursor:pointer;display:block;min-height:var(--select2-multiple-height, 28px);-webkit-user-select:none;user-select:none}.select2-container .select2-selection--multiple .select2-selection__rendered{display:inline-flex;overflow:hidden;padding-left:8px;padding-bottom:2px;text-overflow:ellipsis;white-space:nowrap;flex-wrap:wrap;gap:var(--select2-selection-multiple-gap, 2px 5px)}.select2-container .select2-selection--multiple .select2-selection__rendered .select2-selection__auto-create{flex:1 1 150px;min-width:150px;display:flex}.select2-container .select2-selection--multiple .select2-selection__rendered .select2-create__field{width:100%;border:0}.select2-container .select2-selection--multiple .select2-selection__rendered .select2-create__field:focus{border:0;outline:0}.select2-container .select2-search--inline{float:left}.select2-container .select2-search--inline .select2-search__field{box-sizing:border-box;border:none;font-size:100%;margin-top:5px;padding:0}.select2-container .select2-search--inline .select2-search__field::-webkit-search-cancel-button{-webkit-appearance:none}.select2-dropdown{background:var(--select2-dropdown-background, white);border:1px solid var(--select2-dropdown-border-color, #aaa);border-radius:var(--select2-selection-border-radius, 4px);box-sizing:border-box;display:block;position:absolute;width:100%;z-index:1051;height:0;overflow:hidden}.select2-dropdown .select2-label-content{display:contents}.select2-results{display:block}.select2-results__options{list-style:none;margin:0;padding:0}.select2-results__option{padding:var(--select2-option-padding, 6px);-webkit-user-select:none;user-select:none;color:var(--select2-option-text-color, #000)}.select2-results__option[aria-selected]{cursor:pointer}.select2-container.select2-container-dropdown.select2-container--open{width:100%;opacity:1}.select2-container--open .select2-dropdown{overflow:auto;height:auto}.select2-container--open .select2-dropdown--above{border-bottom:var(--select2-dropdown-above-border-bottom, none);border-bottom-left-radius:var(--select2-dropdown-above-border-bottom-left-radius, 0);border-bottom-right-radius:var(--select2-dropdown-above-border-bottom-right-radius, 0);bottom:27px;display:flex;flex-direction:column-reverse}.select2-container--open .select2-dropdown--below{border-top:var(--select2-dropdown-below-border-top, none);border-top-left-radius:var(--select2-dropdown-below-border-top-left-radius, 0);border-top-right-radius:var(--select2-dropdown-below-border-top-right-radius, 0)}.select2-search--dropdown{display:block;padding:4px}.select2-search--dropdown .select2-search__field{padding:4px;width:100%;box-sizing:border-box}.select2-search--dropdown .select2-search__field::-webkit-search-cancel-button{-webkit-appearance:none}.select2-search--dropdown.select2-search--hide{display:none}.select2-close-mask{border:0;margin:0;padding:0;display:block;position:fixed;left:0;top:0;min-height:100%;min-width:100%;height:auto;width:auto;opacity:0;z-index:99}.select2-required:before{content:"*";color:var(--select2-required-color, red)}.select2-hidden-accessible{border:0!important;clip:rect(0 0 0 0)!important;height:1px!important;margin:-1px!important;overflow:hidden!important;padding:0!important;position:absolute!important;width:1px!important}.select2-container--default .select2-selection--single{background:var(--select2-selection-background, #fff);border:1px solid var(--select2-selection-border-color, #aaa);border-radius:var(--select2-selection-border-radius, 4px);display:flex}.select2-container--default .select2-selection--single .select2-selection__rendered{color:var(--select2-selection-text-color, #111);line-height:var(--select2-selection-line-height, 28px)}.select2-container--default .select2-selection--single .select2-selection__clear{cursor:pointer;float:right;font-weight:700}.select2-container--default .select2-selection--single .select2-selection__placeholder{color:var(--select2-placeholder-color, #999)}.select2-container--default .select2-selection--single .select2-selection__placeholder span{overflow:hidden;white-space:nowrap;text-overflow:var(--select2-placeholder-overflow, ellipsis)}.select2-container--default .select2-selection--single .select2-selection__placeholder__option{display:none}.select2-container--default .select2-selection--single .select2-selection__reset,.select2-container--default .select2-selection--single .select2-selection__arrow{display:flex;width:20px;align-items:center;justify-content:center}.select2-container--default .select2-selection--single .select2-selection__arrow:before{content:" ";border-color:var(--select2-arrow-color, #888) transparent;border-style:solid;border-width:5px 4px 0;height:0;width:0}.select2-container--default .select2-selection--single .select2-selection__reset{color:var(--select2-reset-color, #999)}.select2-container--default.select2-container--disabled .select2-selection--single{background:var(--select2-selection-disabled-background, #eee);cursor:default}.select2-container--default.select2-container--disabled .select2-selection--single .select2-selection__clear{display:none}.select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow:before{border-color:transparent transparent var(--select2-arrow-color, #888);border-width:0 4px 5px}.select2-container--default .select2-selection--multiple{background:var(--select2-selection-background, #fff);border:1px solid var(--select2-selection-border-color, #aaa);border-radius:var(--select2-selection-border-radius, 4px);cursor:text;display:flex}.select2-container--default .select2-selection--multiple .select2-selection__rendered{flex:1 1 auto;box-sizing:border-box;list-style:none;margin:0;padding:var(--select2-selection-multiple-padding, 2px 5px);width:100%;min-height:1em;align-items:center}.select2-container--default .select2-selection--multiple .select2-selection__rendered li{list-style:none;line-height:var(--select2-selection-choice-line-height, 20px)}.select2-container--default .select2-selection--multiple .select2-selection__placeholder{display:block;width:100%;color:var(--select2-placeholder-color, #999);margin-top:5px;float:left;overflow:hidden;white-space:nowrap;text-overflow:var(--select2-placeholder-overflow, ellipsis)}.select2-container--default .select2-selection--multiple .select2-selection__placeholder__option{display:none}.select2-container--default .select2-selection--multiple .select2-selection__clear{cursor:pointer;float:right;font-weight:700;margin-top:5px;margin-right:10px}.select2-container--default .select2-selection--multiple .select2-selection__choice{color:var(--select2-selection-choice-text-color, #000);background:var(--select2-selection-choice-background, #e4e4e4);border:1px solid var(--select2-selection-choice-border-color, #aaa);border-radius:var(--select2-selection-border-radius, 4px);cursor:default;padding:0 5px}.select2-container--default .select2-selection--multiple .select2-selection__choice__remove{color:var(--select2-selection-choice-close-color, #999);cursor:pointer;display:inline-block;font-weight:700;margin-right:2px}.select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover{color:var(--select2-selection-choice-hover-close-color, #333)}.select2-container--default.select2-container--focused .select2-selection--multiple{border:solid var(--select2-selection-focus-border-color, #000) 1px;outline:none}.select2-container--default:not(.select2-container--open) .select2-focused .select2-selection--single,.select2-container--default:not(.select2-container--open) .select2-focused .select2-selection--multiple{border:solid var(--select2-selection-focus-border-color, #000) 1px;outline:none}.select2-container--default.select2-container--disabled .select2-selection--multiple{background:var(--select2-selection-disabled-background, #eee);cursor:default}.select2-container--default.select2-container--disabled .select2-selection__choice__remove{display:none}.select2-container--default.select2-container--open.select2-container--above .select2-selection--single,.select2-container--default.select2-container--open.select2-container--above .select2-selection--multiple{border-top-left-radius:0;border-top-right-radius:0}.select2-container--default.select2-container--open.select2-container--below .select2-selection--single,.select2-container--default.select2-container--open.select2-container--below .select2-selection--multiple{border-bottom-left-radius:0;border-bottom-right-radius:0}.select2-container--default .select2-search--dropdown .select2-search__field{border:1px solid var(--select2-search-border-color, #aaa);background:1px solid var(--select2-search-background, #fff);border-radius:var(--select2-search-border-radius, 0px)}.select2-container--default .select2-search--inline .select2-search__field{background:transparent;border:none;outline:none;box-shadow:none;-webkit-appearance:textfield}.select2-container--default .select2-results>.select2-results__options{overflow-y:auto}.select2-container--default .select2-results__option[role=group]{padding:0;grid-column:col-start/col-end}.select2-container--default .select2-results__option[aria-disabled=true]{color:var(--select2-option-disabled-text-color, #999);background:var(--select2-option-disabled-background, transparent)}.select2-container--default .select2-results__option[aria-selected=true]{color:var(--select2-option-selected-text-color, #000);background:var(--select2-option-selected-background, #ddd)}.select2-container--default .select2-results__option .select2-results__option{padding-left:1em}.select2-container--default .select2-results__option .select2-results__option .select2-results__group{padding-left:0}.select2-container--default .select2-results__option .select2-results__option .select2-results__option{margin-left:-1em;padding-left:2em}.select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option{margin-left:-2em;padding-left:3em}.select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option{margin-left:-3em;padding-left:4em}.select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option{margin-left:-4em;padding-left:5em}.select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option{margin-left:-5em;padding-left:6em}.select2-container--default .select2-results__option--highlighted[aria-selected]{background:var(--select2-option-highlighted-background, #5897fb);color:var(--select2-option-highlighted-text-color, #fff)}.select2-container--default .select2-results__option--hide{display:none}.select2-container--default .select2-results__group{cursor:default;display:block;padding:6px;color:var(--select2-option-group-text-color, gray);background:var(--select2-option-group-background, transparent)}.select2-no-result{color:var(--select2-no-result-color, #888);font-style:var(--select2-no-result-font-style, italic)}.select2-too-much-result{color:var(--select2-too-much-result-color, #888);font-style:var(--select2-too-much-font-style, italic)}.select2-grid,.select2-grid ul{display:grid;grid-template-columns:[col-start] repeat(var(--grid-size),1fr) [col-end]}.select2-grid-auto,.select2-grid-auto ul{display:grid;grid-template-columns:[col-start] repeat(auto-fill,minmax(var(--grid-size, 100px),1fr)) [col-end]}.select2-container--default .select2-grid ul,.select2-container--default .select2-grid-auto ul{padding-left:var(--select2-option-padding, 6px)}.select2-container--default .select2-grid ul .select2-results__group,.select2-container--default .select2-grid-auto ul .select2-results__group{padding-left:0}.select2-container--default .select2-grid ul .select2-results__option,.select2-container--default .select2-grid-auto ul .select2-results__option,.select2-container--default .select2-grid ul .select2-results__option .select2-results__option,.select2-container--default .select2-grid-auto ul .select2-results__option .select2-results__option,.select2-container--default .select2-grid ul .select2-results__option .select2-results__option .select2-results__option,.select2-container--default .select2-grid-auto ul .select2-results__option .select2-results__option .select2-results__option,.select2-container--default .select2-grid ul .select2-results__option .select2-results__option .select2-results__option .select2-results__option,.select2-container--default .select2-grid-auto ul .select2-results__option .select2-results__option .select2-results__option .select2-results__option,.select2-container--default .select2-grid ul .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option,.select2-container--default .select2-grid-auto ul .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option{padding-left:var(--select2-option-padding, 6px)}:host.nostyle .select2-dropdown{border-color:transparent}:host.nostyle .select2-selection--single,:host.nostyle .select2-selection--multiple{background:transparent;border-color:transparent}:host.nostyle .select2-container--default .select2-focused .select2-selection--single,:host.nostyle .select2-container--default .select2-focused .select2-selection--multiple,:host.nostyle .select2-container--default:not(.select2-container--open) .select2-focused .select2-selection--single,:host.nostyle .select2-container--default:not(.select2-container--open) .select2-focused .select2-selection--multiple{background:transparent;border-color:transparent}:host.borderless{--select2-dropdown-above-border-bottom: 1px solid var(--select2-dropdown-border-color, #aaa);--select2-dropdown-above-border-bottom-left-radius: var(--select2-selection-border-radius, 4px);--select2-dropdown-above-border-bottom-right-radius: var(--select2-selection-border-radius, 4px);--select2-dropdown-below-border-top: 1px solid var(--select2-dropdown-border-color, #aaa);--select2-dropdown-below-border-top-left-radius: var(--select2-selection-border-radius, 4px);--select2-dropdown-below-border-top-right-radius: var(--select2-selection-border-radius, 4px)}:host.borderless .select2-selection--single,:host.borderless .select2-selection--multiple{background:transparent;border-color:transparent}:host.borderless .select2-container--default .select2-focused .select2-selection--single,:host.borderless .select2-container--default .select2-focused .select2-selection--multiple,:host.borderless .select2-container--default:not(.select2-container--open) .select2-focused .select2-selection--single,:host.borderless .select2-container--default:not(.select2-container--open) .select2-focused .select2-selection--multiple{background:transparent;border-color:transparent}:host.material{display:inline-block;width:300px}:host.material>.select2-container{padding-bottom:1.29688em;vertical-align:inherit}:host.material>.select2-container .selection{padding:.4375em 0;border-top:.84375em solid transparent;display:inline-flex;align-items:baseline;width:100%;height:auto}:host.material .select2-container--default .select2-selection--single,:host.material .select2-container--default .select2-selection--multiple{width:100%;border:0;border-radius:0;height:24px;box-sizing:border-box}:host.material .select2-container--default .select2-selection--single:before,:host.material .select2-container--default .select2-selection--multiple:before{content:" ";display:block;position:absolute;bottom:1.65em;background:var(--select2-material-underline, #ddd);height:1px;width:100%}:host.material .select2-container--default .select2-selection--single:after,:host.material .select2-container--default .select2-selection--multiple:after{content:" ";display:block;position:absolute;bottom:1.63em;background:var(--select2-material-underline-active, #5a419e);height:2px;width:0%;left:50%;transition:none}:host.material .select2-container--default .select2-selection--single .select2-selection__rendered,:host.material .select2-container--default .select2-selection--multiple .select2-selection__rendered{padding-left:1px;line-height:inherit}:host.material .select2-container--default .select2-selection--single .select2-selection__placeholder,:host.material .select2-container--default .select2-selection--multiple .select2-selection__placeholder{display:block;color:var(--select2-material-placeholder-color, rgba(0, 0, 0, .38));transition:transform .3s;position:absolute;transform-origin:0 21px;left:0;top:20px}:host.material .select2-container--default .select2-container--open{left:0;bottom:1.6em}:host.material .select2-container--default .select2-selection__placeholder__option{transform:translateY(-1.5em) scale(.75) perspective(100px) translateZ(.001px);width:133.33333%}:host.material .select2-container--default .select2-selection__arrow{top:20px}:host.material .select2-container--default.select2-container--open .select2-selection--single:after,:host.material .select2-container--default.select2-container--open .select2-selection--multiple:after,:host.material .select2-container--default .select2-focused .select2-selection--single:after,:host.material .select2-container--default .select2-focused .select2-selection--multiple:after{transition:width .3s cubic-bezier(.12,1,.77,1),left .3s cubic-bezier(.12,1,.77,1);width:100%;left:0%}:host.material .select2-container--default .select2-dropdown{border-radius:0;border:0;box-shadow:0 5px 5px #00000080}:host.material .select2-container--default .select2-results__option[aria-selected=true],:host.material .select2-container--default .select2-results__option--highlighted[aria-selected]{background:var(--select2-material-option-selected-background, rgba(0, 0, 0, .04));color:var(--select2-material-option-highlighted-text-color, #000)}:host.material .select2-container--default .select2-results__option[aria-selected=true]{color:var(--select2-material-option-selected-text-color, #ff5722)}:host.material .select2-container--default.select2-container--disabled .select2-selection--single,:host.material .select2-container--default.select2-container--disabled .select2-selection--multiple{background:transparent}:host.material .select2-container--default.select2-container--disabled .select2-selection--single:before,:host.material .select2-container--default.select2-container--disabled .select2-selection--multiple:before{background:var(--select2-material-underline-disabled, linear-gradient(to right, rgba(0, 0, 0, .26) 0, rgba(0, 0, 0, .26) 33%, transparent 0));background-size:4px 1px;background-repeat:repeat-x;background-position:0 bottom}:host.material.ng-invalid.ng-touched .select2-container--default .select2-selection--single:before,:host.material.ng-invalid.ng-touched .select2-container--default .select2-selection--single:after,:host.material.ng-invalid.ng-touched .select2-container--default .select2-selection--multiple:before,:host.material.ng-invalid.ng-touched .select2-container--default .select2-selection--multiple:after{background:var(--select2-material-underline-invalid, red)}:host.material:not(.select2-container--open) .select2-focused .select2-selection--single,:host.material:not(.select2-container--open) .select2-focused .select2-selection--multiple{border:0}:host.material .select2-subscript-wrapper{position:absolute;top:calc(100% - 1.72917em);font-size:75%;color:var(--select2-hint-text-color, #888)}::ng-deep .select2-overlay-backdrop{background:var(--select2-overlay-backdrop, transparent)}::ng-deep .cdk-overlay-container .select2-container .select2-dropdown.select2-dropdown--above{bottom:28px}::ng-deep .cdk-overlay-container .select2-container--open.select2-position-auto .select2-dropdown{margin-bottom:28px}::ng-deep .cdk-overlay-container .select2-container--open.select2-position-auto .select2-dropdown.select2-dropdown--above{bottom:0;margin-bottom:0;margin-top:28px}::ng-deep .cdk-overlay-container .select2-style-borderless{--select2-dropdown-above-border-bottom: 1px solid var(--select2-dropdown-border-color, #aaa);--select2-dropdown-above-border-bottom-left-radius: var(--select2-selection-border-radius, 4px);--select2-dropdown-above-border-bottom-right-radius: var(--select2-selection-border-radius, 4px);--select2-dropdown-below-border-top: 1px solid var(--select2-dropdown-border-color, #aaa);--select2-dropdown-below-border-top-left-radius: var(--select2-selection-border-radius, 4px);--select2-dropdown-below-border-top-right-radius: var(--select2-selection-border-radius, 4px)}@supports (-moz-appearance: none){select2.material .select2-container--default .select2-selection--single,select2.material .select2-container--default .select2-selection--multiple{height:26px}}\n']
    }]
  }], () => [{
    type: ViewportRuler
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgForm,
    decorators: [{
      type: Optional
    }]
  }, {
    type: FormGroupDirective,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NgControl,
    decorators: [{
      type: Self
    }, {
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }], {
    data: [{
      type: Input,
      args: [{
        required: true
      }]
    }],
    minCharForSearch: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    displaySearchStatus: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    limitSelection: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    listPosition: [{
      type: Input
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    overlay: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    styleMode: [{
      type: Input
    }],
    noResultMessage: [{
      type: Input
    }],
    maxResults: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    maxResultsMessage: [{
      type: Input
    }],
    infiniteScrollDistance: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    infiniteScrollThrottle: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    infiniteScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoCreate: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    noLabelTemplate: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    editPattern: [{
      type: Input
    }],
    templates: [{
      type: Input
    }],
    templateSelection: [{
      type: Input
    }],
    resultMaxHeight: [{
      type: Input
    }],
    customSearchEnabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    minCountForSearch: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    id: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["id"]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideSelectedItems: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    resettable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    resetSelectedValue: [{
      type: Input
    }],
    grid: [{
      type: Input
    }],
    update: [{
      type: Output
    }],
    autoCreateItem: [{
      type: Output
    }],
    open: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    search: [{
      type: Output
    }],
    scroll: [{
      type: Output
    }],
    removeOption: [{
      type: Output
    }],
    ariaInvalid: [{
      type: HostBinding,
      args: ["attr.aria-invalid"]
    }],
    classMaterial: [{
      type: HostBinding,
      args: ["class.material"]
    }],
    classNostyle: [{
      type: HostBinding,
      args: ["class.nostyle"]
    }],
    classBorderless: [{
      type: HostBinding,
      args: ["class.borderless"]
    }],
    select2above: [{
      type: HostBinding,
      args: ["class.select2-above"]
    }],
    cdkConnectedOverlay: [{
      type: ViewChild,
      args: [CdkConnectedOverlay]
    }],
    selection: [{
      type: ViewChild,
      args: ["selection", {
        static: true
      }]
    }],
    resultContainer: [{
      type: ViewChild,
      args: ["results"]
    }],
    results: [{
      type: ViewChildren,
      args: ["result"]
    }],
    searchInput: [{
      type: ViewChild,
      args: ["searchInput"]
    }],
    dropdown: [{
      type: ViewChild,
      args: ["dropdown"]
    }],
    clickDetection: [{
      type: HostListener,
      args: ["document:click", ["$event"]]
    }]
  });
})();
var Select2Hint = class _Select2Hint {
  static {
    this.ɵfac = function Select2Hint_Factory(t) {
      return new (t || _Select2Hint)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _Select2Hint,
      selectors: [["select2-hint"]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Select2Hint, [{
    type: Directive,
    args: [{
      selector: "select2-hint"
    }]
  }], null, null);
})();
var Select2Label = class _Select2Label {
  static {
    this.ɵfac = function Select2Label_Factory(t) {
      return new (t || _Select2Label)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _Select2Label,
      selectors: [["select2-label"]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Select2Label, [{
    type: Directive,
    args: [{
      selector: "select2-label"
    }]
  }], null, null);
})();
var Select2Module = class _Select2Module {
  static {
    this.ɵfac = function Select2Module_Factory(t) {
      return new (t || _Select2Module)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _Select2Module,
      declarations: [Select2Hint, Select2Label, Select2],
      imports: [CommonModule, FormsModule, OverlayModule, ReactiveFormsModule, InfiniteScrollModule],
      exports: [FormsModule, ReactiveFormsModule, Select2Hint, Select2Label, Select2]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, FormsModule, OverlayModule, ReactiveFormsModule, InfiniteScrollModule, FormsModule, ReactiveFormsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Select2Module, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, OverlayModule, ReactiveFormsModule, InfiniteScrollModule],
      declarations: [Select2Hint, Select2Label, Select2],
      exports: [FormsModule, ReactiveFormsModule, Select2Hint, Select2Label, Select2]
    }]
  }], null, null);
})();
export {
  Select2,
  Select2Hint,
  Select2Label,
  Select2Module,
  Select2Utils,
  defaultMinCountForSearch,
  protectRegexp,
  timeout,
  unicodePatterns
};
//# sourceMappingURL=ng-select2-component.js.map