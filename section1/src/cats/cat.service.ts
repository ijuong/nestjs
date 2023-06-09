import { Request, Response } from "express";
import { Cat, CatType } from "./cats.model";

//* READ 고양이 전체 데이터 다 조회
export const readAllCat = (req: Request, res: Response) => {
  try {
    const cats = Cat;
    //throw new Error("db connection error");
    res.status(200).send({
      sucess: true,
      data: { cats },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      //error: error.message,
    });
  }
};

//* READ 특정 고양이 데이터 조회
export const readCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    console.log(params);
    const cats = Cat.find((cat) => {
      return cat.id === params.id;
    });

    res.status(200).send({
      sucess: true,
      data: { cats },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      //error: error.message,
    });
  }
};

//* CREATE 고양이 데이터 생성
export const createCat = (req: Request, res: Response) => {
  try {
    const data = req.body;
    console.log(data);
    Cat.push(data);
    res.status(200).send({
      sucess: true,
      data: { data },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      //error: error.message,
    });
  }
};

//* UPDATE 고양이 데이터 수정 -> PUT
export const updateCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;

    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = body;
        result = cat;
      }
    });

    res.status(200).send({
      sucess: true,
      data: { cat: result },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      //error: error.message,
    });
  }
};

//* UPDATE 고양이 데이터 부분적으로 업데이트 -> PATCH
export const updatePartialCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;

    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = { ...cat, ...body }; //구조분해 할당
        result = cat;
      }
    });

    res.status(200).send({
      sucess: true,
      data: { cat: result },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      //error: error.message,
    });
  }
};

//* DELETE 고양이 데이터 삭제 -> DELETE
export const deleteCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const newCat = Cat.filter((cat) => cat.id !== params.id);

    res.status(200).send({
      sucess: true,
      data: { data: newCat },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      //error: error.message,
    });
  }
};
