import TSON from "../../../../src";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_object_union_implicit = _test_application_ajv(
    "union object",
    TSON.application<[ObjectUnionImplicit], "ajv">(),
    {
        schemas: [
            {
                type: "array",
                items: {
                    oneOf: [
                        {
                            $ref: "components#/schemas/ObjectUnionImplicit.IPoint",
                        },
                        {
                            $ref: "components#/schemas/ObjectUnionImplicit.ILine",
                        },
                        {
                            $ref: "components#/schemas/ObjectUnionImplicit.ITriangle",
                        },
                        {
                            $ref: "components#/schemas/ObjectUnionImplicit.IRectangle",
                        },
                        {
                            $ref: "components#/schemas/ObjectUnionImplicit.IPolyline",
                        },
                        {
                            $ref: "components#/schemas/ObjectUnionImplicit.IPolygon",
                        },
                        {
                            $ref: "components#/schemas/ObjectUnionImplicit.ICircle",
                        },
                    ],
                },
                nullable: false,
            },
        ],
        components: {
            schemas: {
                "ObjectUnionImplicit.IPoint": {
                    $id: "components#/schemas/ObjectUnionImplicit.IPoint",
                    type: "object",
                    properties: {
                        x: {
                            type: "number",
                            nullable: false,
                        },
                        y: {
                            type: "number",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["x", "y"],
                    "x-tson_jsDocTags": [],
                },
                "ObjectUnionImplicit.ILine": {
                    $id: "components#/schemas/ObjectUnionImplicit.ILine",
                    type: "object",
                    properties: {
                        p1: {
                            $ref: "components#/schemas/ObjectUnionImplicit.IPoint",
                        },
                        p2: {
                            $ref: "components#/schemas/ObjectUnionImplicit.IPoint",
                        },
                    },
                    nullable: false,
                    required: ["p1", "p2"],
                    "x-tson_jsDocTags": [],
                },
                "ObjectUnionImplicit.ITriangle": {
                    $id: "components#/schemas/ObjectUnionImplicit.ITriangle",
                    type: "object",
                    properties: {
                        p1: {
                            $ref: "components#/schemas/ObjectUnionImplicit.IPoint",
                        },
                        p2: {
                            $ref: "components#/schemas/ObjectUnionImplicit.IPoint",
                        },
                        p3: {
                            $ref: "components#/schemas/ObjectUnionImplicit.IPoint",
                        },
                    },
                    nullable: false,
                    required: ["p1", "p2", "p3"],
                    "x-tson_jsDocTags": [],
                },
                "ObjectUnionImplicit.IRectangle": {
                    $id: "components#/schemas/ObjectUnionImplicit.IRectangle",
                    type: "object",
                    properties: {
                        p1: {
                            $ref: "components#/schemas/ObjectUnionImplicit.IPoint",
                        },
                        p2: {
                            $ref: "components#/schemas/ObjectUnionImplicit.IPoint",
                        },
                        p3: {
                            $ref: "components#/schemas/ObjectUnionImplicit.IPoint",
                        },
                        p4: {
                            $ref: "components#/schemas/ObjectUnionImplicit.IPoint",
                        },
                    },
                    nullable: false,
                    required: ["p1", "p2", "p3", "p4"],
                    "x-tson_jsDocTags": [],
                },
                "ObjectUnionImplicit.IPolyline": {
                    $id: "components#/schemas/ObjectUnionImplicit.IPolyline",
                    type: "object",
                    properties: {
                        points: {
                            type: "array",
                            items: {
                                $ref: "components#/schemas/ObjectUnionImplicit.IPoint",
                            },
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["points"],
                    "x-tson_jsDocTags": [],
                },
                "ObjectUnionImplicit.IPolygon": {
                    $id: "components#/schemas/ObjectUnionImplicit.IPolygon",
                    type: "object",
                    properties: {
                        outer: {
                            $ref: "components#/schemas/ObjectUnionImplicit.IPolyline",
                        },
                        inner: {
                            type: "array",
                            items: {
                                $ref: "components#/schemas/ObjectUnionImplicit.IPolyline",
                            },
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["outer", "inner"],
                    "x-tson_jsDocTags": [],
                },
                "ObjectUnionImplicit.ICircle": {
                    $id: "components#/schemas/ObjectUnionImplicit.ICircle",
                    type: "object",
                    properties: {
                        centroid: {
                            $ref: "components#/schemas/ObjectUnionImplicit.IPoint",
                        },
                        radius: {
                            type: "number",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["centroid", "radius"],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
