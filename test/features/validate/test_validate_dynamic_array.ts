import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_validate } from "./_test_validate";

export const test_validate_dynamic_array = _test_validate(
    "dynamic array",
    DynamicArray.generate,
    (input) => TSON.validate(input),
    [
        (input) => {
            input["something"] = [0] as any;
            input["another"] = [false] as any;
            return [`$input.something[0]`, `$input.another[0]`];
        },
    ],
);
