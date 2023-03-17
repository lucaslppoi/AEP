import { Request, Response } from 'express'
import productService from '../services/productService'

class ProductController {  
    async create(req: Request, res: Response) {
        await productService.createProductList(req.body)
        return res.status(201).send()
    }

    async getProductList(req: Request, res: Response) {
        return res.json(await productService.listProducts())
    }

    async getStockList(req: Request, res: Response) {
        return res.json(await productService.getStock())
    }
}

export default new ProductController()