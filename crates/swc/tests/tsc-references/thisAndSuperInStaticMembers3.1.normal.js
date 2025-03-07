//// [thisAndSuperInStaticMembers3.ts]
import _assert_this_initialized from "@swc/helpers/src/_assert_this_initialized.mjs";
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _define_property from "@swc/helpers/src/_define_property.mjs";
import _get from "@swc/helpers/src/_get.mjs";
import _get_prototype_of from "@swc/helpers/src/_get_prototype_of.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
var C = /*#__PURE__*/ function(B1) {
    "use strict";
    _inherits(C, B1);
    var _super = _create_super(C);
    function C() {
        _class_call_check(this, C);
        var _this;
        _this = _super.apply(this, arguments);
        // these should be unaffected
        _define_property(_assert_this_initialized(_this), "x", 1);
        _define_property(_assert_this_initialized(_this), "y", _this.x);
        _define_property(_assert_this_initialized(_this), "z", _get((_assert_this_initialized(_this), _get_prototype_of(C.prototype)), "f", _this).call(_this));
        return _this;
    }
    return C;
}(B);
_define_property(C, "x", undefined);
_define_property(C, "y1", C.x);
_define_property(C, "y2", C.x());
_define_property(C, "y3", C === null || C === void 0 ? void 0 : C.x());
_define_property(C, "y4", C["x"]());
_define_property(C, "y5", C === null || C === void 0 ? void 0 : C["x"]());
_define_property(C, "z3", _get(_get_prototype_of(C), "f", C).call(C));
_define_property(C, "z4", _get(_get_prototype_of(C), "f", C).call(C));
