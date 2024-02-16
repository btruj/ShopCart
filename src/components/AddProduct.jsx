import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"

const AddProduct = () => {
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        console.log(data)
    }
  return (
    <div className='fromContainer'>
        <h4 className='formTitle'>Add New Product</h4>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 text-[#534F4F]'>
            <div className='space-y-2'>
            <label>Product Name</label>
            <input {...register("name", { required: true})} placeholder="product name" type='text' className='addProductInput' />
            </div>

            {/* category */}
            <div className='space-y-2'>
            <label>Category</label>
            <select {...register("category", { required: true})} className='addProductInput'>
                <option value="">Select a category</option>
                <option value="clothing">Clothing</option>
                <option value="gadgets">Gadgets</option>
                <option value="bags">Bags</option>
                {/* Add more options as needed */}
            </select>
            </div>

            {/* img div */}
            <div className='space-y-2'>
            <label>Image URL</label>
            <input {...register("imgUrl", { required: true})} type='text' className='addProductInput' />
            {errors.imgUrl && <span>This field is required</span>}
            </div>
            {/* price & quantity */}
            <div className='grid grid-cols-2 gap-8 pb-4'>
            <div className='space-y-2'>
            <label>Price</label>
            <input {...register("price", { required: true})} type='number'  className='addProductInput' />
            {errors.imgUrl && <span>Please enter a valid price</span>}
            </div>
            <div className='space-y-2'>
            <label>Quantity</label>
            <input {...register("quantity", { required: true})} type='number' id='lws-inputQuantity' className='addProductInput' />
            {errors.imgUrl && <span>Please enter a valid quantity</span>}
            </div>
            </div>
            <button type='submit' className='submit bg-indigo-700 text-white rounded' >Add Product</button>
        </form>
    </div>
  )
}

export default AddProduct