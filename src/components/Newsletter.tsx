const Newsletter = () => {
  return (
    <div className='mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:w-full my-8 font-montserrat'>
      <div className='rounded-3xl bg-gray-900 py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:p-20'>
        <div className='lg:w-0 lg:flex-1'>
          <h2 className='text-xl font-bold tracking-tight text-white'>
            Sign up for our newsletter
          </h2>
          <p className='mt-4 max-w-3xl text-sm text-gray-100'>
            Get remote job alerts sent directly to your inbox by subscribing.
          </p>
        </div>
        <div className='mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1'>
          <form method='post' className='sm:flex space-y-2'>
            <label htmlFor='email-address' className='sr-only'>
              Email address
            </label>
            <input
              id='email-address'
              type='email'
              autoComplete='email'
              className='w-full rounded-md text-black bg-white border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700'
              placeholder='Your email'
            />
            <input
              type='checkbox'
              defaultValue={1}
              className='hidden'
              tabIndex={-1}
              autoComplete='off'
            />
            <button
              type='submit'
              className='mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-500 px-5 py-3 text-base font-medium text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0'
            >
              Subscribe
            </button>
          </form>
          <p className='mt-3 text-sm text-gray-100'>
            We care about the protection of your data. Read our
            <a className='font-medium text-white underline'>Privacy Policy.</a>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Newsletter
