import type { NextApiRequest, NextApiResponse } from 'next'
import auth from "../../../utils/auth";
import authorizedUsers from "../../../utils/authorizedUsers";
import dbConnect from '../../../utils/dbConnect'

// Import models
import AluminumProvider from '../../../models/providers/AluminumProvider';
import CrystalProvider from '../../../models/providers/CrystalProvider';
import SuppliesProvider from '../../../models/providers/SuppliesProvider';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await auth(req, res)
    await authorizedUsers(req, ['manager'])
    await dbConnect()

    let provider

    switch(req.body.provider) {
      case "ALUMINIO":
        provider = await AluminumProvider.create({ name: req.body.name })
        break;
      case "CRISTAL":
        provider = await CrystalProvider.create({ name: req.body.name })
        break;
      case "INSUMOS":
        provider = await SuppliesProvider.create({ name: req.body.name })
        break;
      default:
        console.log("??")
        break;
    }

    res.json({provider: provider})
  } catch(e) {
    console.log(e)
    res.json({error: e})
  }
}

export default handler