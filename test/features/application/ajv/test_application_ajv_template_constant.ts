import TSON from "../../../../src";
import { TemplateConstant } from "../../../structures/TemplateConstant";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_template_constant = _test_application_ajv(
    "pattern tag",
    TSON.application<[TemplateConstant], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/TemplateConstant",
            },
        ],
        components: {
            schemas: {
                TemplateConstant: {
                    $id: "components#/schemas/TemplateConstant",
                    type: "object",
                    properties: {
                        prefix: {
                            type: "string",
                            enum: ["prefix_A", "prefix_B", "prefix_C"],
                            nullable: false,
                        },
                        postfix: {
                            type: "string",
                            enum: ["2_postfix", "3_postfix", "1_postfix"],
                            nullable: false,
                        },
                        combined: {
                            type: "string",
                            enum: [
                                "the_2_value_with_label_A",
                                "the_2_value_with_label_B",
                                "the_2_value_with_label_C",
                                "the_3_value_with_label_A",
                                "the_3_value_with_label_B",
                                "the_3_value_with_label_C",
                                "the_1_value_with_label_A",
                                "the_1_value_with_label_B",
                                "the_1_value_with_label_C",
                            ],
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["prefix", "postfix", "combined"],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
