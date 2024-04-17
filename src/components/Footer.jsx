import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="relative z-10 bg-white pb-10 pt-20 dark:bg-black lg:pb-20 lg:pt-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
            <div className="mb-10 w-full">
              <Link to="/" className="mb-6 inline-block max-w-[160px] rounded-lg">
                <img
                  src="https://cdn.dribbble.com/users/131063/screenshots/3028124/s-logo.png"
                  alt="logo"
                  className="max-w-full dark:hidden"
                />
                <img
                  src="https://cdn.dribbble.com/users/131063/screenshots/3028124/s-logo.png"
                  alt="logo"
                  className="max-w-full hidden dark:block rounded-lg"
                />
              </Link>
              <p className="mb-7 text-base text-body-color dark:text-dark-6">
                Sed ut perspiciatis undmnis is iste natus error sit amet
                voluptatem totam rem aperiam.
              </p>
            </div>
          </div>

          <LinkGroup header="Компания">
            <NavLink to="/" label="О нас" />
            <NavLink to="/" label="Контакты" />
          </LinkGroup>
          <LinkGroup header="Ссылки">
            <NavLink to="/" label="Помощь" />
            <NavLink to="/" label="Обратная связь" />
          </LinkGroup>
        </div>
      </div>
      <div>
        <span className="absolute bottom-0 left-0 z-[-1]">
          <svg
            width={217}
            height={229}
            viewBox="0 0 217 229"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
              fill="url(#paint0_linear_1179_5)"
            />
            <defs>
              
            </defs>
          </svg>
        </span>
        
      </div>
    </footer>
  );
}

function LinkGroup({ children, header }) {
  return (
    <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
      <div className="mb-10 w-full">
        <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
          {header}
        </h4>
        <ul className="space-y-3">{children}</ul>
      </div>
    </div>
  );
}

function NavLink({ to, label }) {
  return (
    <li>
      <Link
        to={to}
        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
      >
        {label}
      </Link>
    </li>
  );
}
