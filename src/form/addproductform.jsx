import { Formik, Form, Field } from "formik";
import { z, object, string } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useMutation } from "@tanstack/react-query";
import clsx from "clsx";

// Define the schema using Zod
const addProductFormSchema = z.object({
  title: string({
    required_error: "*Please enter a title",
  }),
  price: string({
    required_error: "*Please enter a price",
  }),
  description: string({
    required_error: "*Please enter a description",
  }),
  image: string({
    required_error: "*Image is required",
  }),
});

// Function to add product
const addProduct = async (product) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ...product, id: Date.now() }), 500);
  });
};

const AddProductForm = ({ onAddProduct }) => {
  const mutation = useMutation({
    mutationFn: addProduct,
    onSuccess: (data) => {
      alert("Product added successfully");
      onAddProduct(data);
    },
    onError: (error) => {
      console.error("Error adding product:", error);
      alert("Failed to add product");
    },
  });

  return (
    <Formik
      initialValues={{
        title: "",
        price: "",
        description: "",
        image: "",
      }}
      onSubmit={async (values, { resetForm }) => {
        await mutation.mutateAsync({
          title: values.title,
          price: Number(values.price),
          description: values.description,
          image: values.image,
        });
        resetForm();
      }}
      validationSchema={toFormikValidationSchema(addProductFormSchema)}
    >
      {({ errors }) => (
        <Form>
          <div className="p-4">
            <div>
              <label className="text-md font-semibold text-black">Title</label>
              <Field
                type="text"
                name="title"
                placeholder="Enter title"
                className="rounded-lg w-full border border-gray-300 p-2"
              />
              {!!errors.title && (
                <div className="text-primary pt-2">{errors.title}</div>
              )}
            </div>

            <div className="mt-4">
              <label className="text-md font-semibold text-black">Price</label>
              <Field
                type="text"
                name="price"
                placeholder="Enter price"
                className="rounded-lg w-full border border-gray-300 p-2"
              />
              {!!errors.price && (
                <div className="text-primary pt-2">{errors.price}</div>
              )}
            </div>

            <div className="mt-4">
              <label className="text-md font-semibold text-black">
                Description
              </label>
              <Field
                type="text"
                name="description"
                placeholder="Enter description"
                className="rounded-lg w-full border border-gray-300 p-2"
              />
              {!!errors.description && (
                <div className="text-primary pt-2">{errors.description}</div>
              )}
            </div>

            <div className="mt-4">
              <label className="text-md font-semibold text-black">Image</label>
              <Field
                type="text"
                name="image"
                placeholder="Enter image URL"
                className="rounded-lg w-full border border-gray-300 p-2"
              />
              {!!errors.image && (
                <div className="text-primary pt-2">{errors.image}</div>
              )}
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className={clsx(
                  "bg-primary px-4 py-2 rounded-md text-white",
                  mutation.isPending ? "opacity-50" : null
                )}
                disabled={mutation.isPending}
              >
                {mutation.isPending ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddProductForm;
