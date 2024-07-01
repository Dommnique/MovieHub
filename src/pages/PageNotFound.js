import PageNotFoungImg from '../asset/404.png';
import { Button } from '../components';
import { Link } from 'react-router-dom';
import { useTitle } from '../hooks';

export const PageNotFound = ({title}) => {
  useTitle(title);

  return (
    <main>
      <section className="flex flex-col py-8">
        <div className='flex flex-col items-center'>
          <p className='font-bold text-4xl py-5 dark:text-white'>404! Oops! Page not found</p>
          <div className='max-w-lg'>
            <img src={PageNotFoungImg} alt="404! Page not found" />
          </div>
        </div>

        <div className='flex justify-center items-center'>
          <Link to={'/'}>
            <Button>Back to Home</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
