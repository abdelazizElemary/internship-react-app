import Button from "../components/Button";
import Input from "../components/Input";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className='container grid place-content-center h-[calc(100vh-5rem-2px)]'>
        <h1 className='text-4xl font-extrabold text-bluegrey'>
          Change Collection Name
        </h1>
        <p className='text-bluegrey/80 mt-2'>
          Collections are ways for you to organize your NFTs in your storefront.
        </p>

        <form>
          <div className='mt-6'>
            <Input label='Collection Name' placeholder='Enter Name Here' />
          </div>
          <div className='mt-6 flex gap-5'>
            <Button shape='secondary' type='button' style={{ padding: 0 }}>
              BACK
            </Button>
            {/* the submit button 👇 */}
            <Button>SAVE NAME</Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
