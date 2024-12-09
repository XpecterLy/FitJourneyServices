import { string } from "joi";
import { categoriesTrainingAreasModel } from "../schemas/CategoriesTrainingAreas.schema";
import { CategoriesTrainingAreaType } from "../types/categoriesTrainingAreas.types";
import { ErrorType } from "../types/error.type";

export const GetAllCategoriesTrainingAreasService = async(trainingStylesId?: string, limit?: number): Promise<CategoriesTrainingAreaType[]> => {
    var filter = {};

    trainingStylesId != undefined ? 
        filter = 
        {
            ...filter,
            trainingStylesId: trainingStylesId
        } : 
        filter;

    const res = await categoriesTrainingAreasModel.find(filter).limit(limit || 10);

    const resList: CategoriesTrainingAreaType[] =  res.map((item) => ({
        id: item.id,
        trainingStylesId: item.trainingStylesId || '',
        name: item.name || '',
        details: item.details || ''
    }))
    return resList;
}

export const GetCategoriesTrainingAreasByIdService = async(id: string) => {
    const res = await categoriesTrainingAreasModel.findOne({_id: id});
    if ( res === null ) throw { code: 404, message: 'category not found' } as ErrorType;
    return {
        id: res.id,
        trainingStylesId: res.trainingStylesId,
        name: res.name,
        details: res.details
    } as CategoriesTrainingAreaType;
}

export const GetCategoriesTrainingAreasByNameService = async(name: string, trainingStylesId?: string) => {
    var filter = {};
    trainingStylesId ? filter = {
        ...filter,
        trainingStylesId: trainingStylesId
    } : filter;

    const res = await categoriesTrainingAreasModel.findOne({...filter, name: name});
    if ( res === null )  return {} as CategoriesTrainingAreaType;
    return {
        id: res.id,
        trainingStylesId: res.trainingStylesId,
        name: res.name,
        details: res.details
    } as CategoriesTrainingAreaType;
}

export const InsertCategoriesTrainingAreasService = async(data: CategoriesTrainingAreaType) => {
    const category = new categoriesTrainingAreasModel(data);
    const res = await category.save();
    if(!res) throw { code: 400, message: 'error to insert' } as ErrorType;

    return {
        id: category._id.toString(),
        trainingStylesId: res.trainingStylesId,
        name: data.name,
        details: data.details
    } as CategoriesTrainingAreaType;
}

export const UpdateCategoriesTrainingAreasService = async(id: string, newData: CategoriesTrainingAreaType, oldData: CategoriesTrainingAreaType): Promise<CategoriesTrainingAreaType> => {
    var categorie = {
        ...oldData,
        trainingStylesId: newData.trainingStylesId != undefined ? newData.trainingStylesId : oldData.trainingStylesId,
        name: newData.name != undefined ? newData.name : oldData.name,
        details: newData.details != undefined ? newData.details : oldData.details,
    } as CategoriesTrainingAreaType;

    await categoriesTrainingAreasModel.updateOne({_id: id},categorie);

    return categorie;
}

export const DeleteCategoriesTrainingAreasService = async(id: string) => {
    const categoriDelete = await categoriesTrainingAreasModel.deleteOne({_id: id});
    if(categoriDelete.deletedCount <= 0) throw { code: 400, message: 'error to delete category' } as ErrorType;
}