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

    const provider = req.body.provider 

    switch(provider.provider) {
      case "ALUMINIO":
        // ALUMINIO
        await AluminumProvider.findByIdAndUpdate(provider._id, { $set: { profiles: provider.profiles } })
        break;
      case "CRISTAL":
        // CRISTAL
        await CrystalProvider.findByIdAndUpdate(provider._id, { $set: { crystal: provider.crystal } })
        break;
      case "SUMINISTROS":
        // INSUMOS
        await SuppliesProvider.findByIdAndUpdate(provider._id, { $set: { supplies: provider.supplies } })
        break;
      default:
        console.log("??")
        break;
    }

    res.json({ message: "OK" })
  } catch(e) {
    console.log(e)
    res.json({error: true})
  }
}

export default handler

/**
 * 
 * - Drinking
 * - Eating
 * -  
 */