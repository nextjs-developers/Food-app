import { useForm } from 'react-hook-form';

function ValidationPhone({ phone, setPhone }) {
  const { 
    register, 
    formState: { errors }, 
    setValue,
    trigger 
  } = useForm();

  const validate = (value) => {
    if (!value) return 'Mobile number is required.';
    if (!/^09[0-9]{9}$/.test(value)) return 'Mobile number is not valid';
    return true;
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    setValue('phone', value);
    trigger('phone');
  };

  return (
    <>
      <input
        {...register('phone', { 
          validate: validate,      
        })}
        placeholder="09123456789"
        type="tel"
        className="input input-bordered w-full outline-none focus:outline-none hover:outline-none dark:text-white dark:border-white"
        value={phone}
        onChange={handleChange}
        required
      />
      {errors.phone && (
        <p className="text-red-500 text-sm mt-1">
          {errors.phone.message}
        </p>
      )}
    </>
  );
}

export { ValidationPhone };