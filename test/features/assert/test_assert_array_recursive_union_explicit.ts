import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_assert } from "./_test_assert";

export const test_assert_array_recursive_union_explicit = _test_assert(
    "explicit recursive union array",
    ArrayRecursiveUnionExplicit.generate,
    (input) => TSON.assertType(input),
    [
        //----
        // SEQUENCE OF GENERATED BUCKETS
        //----
        // 0. IMAGE
        // 1. TEXT
        // 2. ZIP
        // 3~5. SHORTCUTS
        // 6. DIRECTORY
        // 7. SHORTCUT OF DIRECTORY

        //----
        // WRONG TYPES
        //----
        (input) => (input[0].type = "directory") && true,
        (input) => (input[1].type = "directory") && true,
        (input) => (input[2].type = "text" as "file") && true,
        (input) => (input[3].type = "directory") && true,
        (input) => (input[4].type = "text" as "file") && true,
        (input) => (input[5].type = "directory") && true,
        (input) => (input[6].type = "file") && true,

        //----
        // WRONG EXTENSIONS
        //---
        (input) =>
            ((input[0] as ArrayRecursiveUnionExplicit.IFile).extension =
                "txt") && true,
        (input) =>
            ((input[1] as ArrayRecursiveUnionExplicit.IFile).extension =
                "zip") && true,
        (input) =>
            ((input[2] as ArrayRecursiveUnionExplicit.IFile).extension =
                "jpg") && true,
        (input) =>
            ((input[3] as ArrayRecursiveUnionExplicit.IFile).extension =
                "txt") && true,
        (input) =>
            ((input[4] as ArrayRecursiveUnionExplicit.IFile).extension =
                "zip") && true,
        (input) =>
            ((input[5] as ArrayRecursiveUnionExplicit.IFile).extension =
                "jpg") && true,

        //----
        // WRONG PROPERTIES
        //----
        (input) => (input[0].id = "uuid" as any) && true,
        (input) => (input[1].name = 3 as any as string) && true,
        (input) => (input[2].path = {} as any as string) && true,
        (input) =>
            ((input[3] as ArrayRecursiveUnionExplicit.IShortcut).target =
                [] as any as ArrayRecursiveUnionExplicit.IBucket) && true,
        (input) =>
            ((input[4] as ArrayRecursiveUnionExplicit.IShortcut).extension =
                null as any as "lnk") && true,
        (input) => (input[5].type = [] as any as "directory") && true,
        (input) =>
            ((
                input[6] as ArrayRecursiveUnionExplicit.IDirectory
            ).children[0].path = [] as any as string) && true,
    ],
);
