import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_validate_equals } from "./_test_validate_equals";

export const test_validate_equals_dynamic_tree = _test_validate_equals(
    "dynamic tree",
    DynamicTree.generate,
    (input) => TSON.validateEquals(input),
    false,
);
