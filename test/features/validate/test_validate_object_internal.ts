import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_validate } from "./_test_validate";

export const test_validate_object_internal = _test_validate(
    "object internal",
    ObjectInternal.generate,
    (input) => TSON.validate(input),
    [
        (input) => {
            input.name = false as any;
            return ["$input.name"];
        },
        (input) => {
            input.id = 1 as any;
            return ["$input.id"];
        },
    ],
);
