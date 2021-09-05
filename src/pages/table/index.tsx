import { ipserver } from '/config/ipserver';
import dynamic from 'next/dynamic'


const Muitable = dynamic(() => import('/components/muitable/muitable.tsx'))

export default function Index({rawResponse,notFound}){
    if(notFound) return <p>data not found</p>
    return <Muitable ItemShop={rawResponse}/>
}
export async function getStaticProps(ctx) {
  try{
      const rawResponse = await fetch(`${ipserver}/api/car`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(r => r.json());
      if (!rawResponse) {
        return {
          notFound: true,
        }
      }
      return {
        props: {rawResponse:rawResponse}, // will be passed to the page component as props
      }
    }catch(e){
      return {
        notFound:true
      }
    }
  }