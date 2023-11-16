type InputProps = {
  htmlFor: string;
  type: string;
  placeholder: string;
};

const FormInput = ({ htmlFor, type, placeholder }: InputProps) => {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={htmlFor} className='font-semibold text-sm text-neutral-300'>
        Enter your {htmlFor}:
      </label>
      <input
        name={htmlFor}
        id={htmlFor}
        type={type}
        placeholder={placeholder}
        required
        className='rounded-sm p-1 text-black'
      />
    </div>
  );
};

export default FormInput;
