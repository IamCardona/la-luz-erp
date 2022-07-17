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

    let providers: any[] = []

    const aluminumProvider = await AluminumProvider.find({})
    const crystalProvider = await CrystalProvider.find({})
    const suppliesProvider = await SuppliesProvider.find({})

    providers = providers.concat(aluminumProvider)
    providers = providers.concat(crystalProvider)
    providers = providers.concat(suppliesProvider)

    res.json({data: providers})
  } catch(e) {
    console.log(e)
    res.json({error: e})
  }
}

export default handler