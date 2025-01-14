import * as tr from "class-transformer";
import * as cv from "class-validator";

export class CvArrayRecursiveUnionExplicit {
    @cv.IsNumber()
    id!: number;

    @cv.IsString()
    name!: string;

    @cv.IsString()
    path!: string;

    @cv.IsString()
    @cv.IsIn(["directory", "file"])
    type!: string;

    @cv.IsOptional()
    @cv.IsString()
    @cv.IsIn(["jpg", "txt", "zip", "lnk"])
    extension?: string;

    @cv.IsOptional()
    @cv.IsArray()
    @cv.ValidateNested({ each: true })
    @tr.Type(() => CvArrayRecursiveUnionExplicit)
    children?: CvArrayRecursiveUnionExplicit[];

    @cv.IsOptional()
    @cv.IsNumber()
    width?: number;

    @cv.IsOptional()
    @cv.IsNumber()
    height?: number;

    @cv.IsOptional()
    @cv.IsString()
    url?: string;

    @cv.IsOptional()
    @cv.IsNumber()
    size?: number;

    @cv.IsOptional()
    @cv.IsString()
    content?: string;

    @cv.IsOptional()
    @cv.IsNumber()
    count?: number;

    @cv.IsOptional()
    @cv.ValidateNested()
    @tr.Type(() => CvArrayRecursiveUnionExplicit)
    target?: CvArrayRecursiveUnionExplicit;
}
