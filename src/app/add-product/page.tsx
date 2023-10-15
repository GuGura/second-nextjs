import prisma from "@/lib/db/prisma";
import {redirect} from "next/navigation";
import FormSubmitButton from "@/components/FormSubmitButton";

export const metadata = {
  title: 'Add Product - Flowmazon',
}

async function addProduct(formData: FormData) {
  'use server';

  const name = formData.get('name')?.toString();
  const description = formData.get('description')?.toString();
  const imageUrl = formData.get('imageUrl')?.toString();
  const price = Number(formData.get('price') || 0);

  if (!name || !description || !imageUrl || !price) {
    throw Error('Missing required fields')
  }

  await prisma.products.create({
    data: {name, description, imageUrl, price}
  })

  redirect('/')
}

export default function AddProductPage() {
  return (
    <div>
      <h1 className='text-lg mb-3 font-bold'>Add Product</h1>
      <form action={addProduct}>
        <input
          required
          name='name'
          placeholder='Name'
          className="input input-bordered w-full mb-3"
        />
        <textarea
          required
          name='description'
          placeholder='Description'
          className='textarea-bordered textarea w-full mb-3'
        />
        <input
          required
          name='imageUrl'
          placeholder='Image URL'
          type='url'
          className="input input-bordered w-full mb-3"
        />
        <input
          required
          name='price'
          placeholder='Price'
          type='number'
          className="input input-bordered w-full mb-3"
        />
        <FormSubmitButton className='btn-block'>
          Add Product
        </FormSubmitButton>
      </form>
    </div>
  )
}