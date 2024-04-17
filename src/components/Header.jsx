import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export function Header({ cart }) {
    const [modalOpen, setModalOpen] = useState(false);

    const trigger = useRef(null);
    const modal = useRef(null);

    return (
        <header className="flex items-center bg-white dark:bg-slate-800">
            <div className="container">
                <div className="relative -mx-4 flex items-center justify-between">
                    <div className="w-60 max-w-full px-4">
                        <Link to="/" className="block w-full py-5">
                            <img
                                src="https://cdn.dribbble.com/users/131063/screenshots/3028124/s-logo.png"
                                alt="logo"
                                className="dark:hidden rounded-lg"
                            />
                            <img
                                src="https://cdn.dribbble.com/users/131063/screenshots/3028124/s-logo.png"
                                alt="logo"
                                className="hidden dark:block rounded-lg"
                            />
                        </Link>
                    </div>
                    <div className="flex w-full items-center justify-between px-4">
                        <div>
                            <button
                                onClick={() => setOpen(!open)}
                                id="navbarToggler"
                                className={` ${open && "navbarTogglerActive"
                                    } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                            >
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                            </button>
                            <nav
                                id="navbarCollapse"
                                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-black-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${!open && "hidden"
                                    } `}
                            >
                                <ul className="block lg:flex">
                                    <ListItem to="/">Главная</ListItem>
                                    <ListItem to="/">Каталог</ListItem>
                                    <ListItem to="/">О нас</ListItem>
                                    <ListItem to="/">Профиль</ListItem>
                                </ul>
                            </nav>
                        </div>
                        <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                            <div className="container mx-auto py-20">
                                <button
                                    reg={trigger}
                                    onClick={() => setModalOpen(true)}
                                    className="rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/90"
                                >
                                    Корзина
                                </button>
                                <div
                                    className={`fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5 ${modalOpen ? "block" : "hidden"
                                        }`}
                                >
                                    <div
                                        ref={modal}
                                        onFocus={() => setModalOpen(true)}
                                        onBlur={() => setModalOpen(false)}
                                        className="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center dark:bg-black-2 md:px-[70px] md:py-[60px]"
                                    >
                                        <div>
                                            <h4 className="mb-4 text-2xl font-bold text-center">Корзина</h4>
                                            {
                                                cart.length !== 0 && cart.map((cartItem, i) => (
                                                    <div className="flex mb-5 p-5 items-center gap-5 border">
                                                        <p>{i + 1}</p>
                                                        <p>{cartItem.title}</p>
                                                        <p>{cartItem.price}</p>
                                                        <p>{cartItem.quantity}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className="-mx-3 flex flex-wrap">
                                            <div className="w-1/2 px-3">
                                                <button
                                                    onClick={() => setModalOpen(false)}
                                                    className="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:text-red-600"
                                                >
                                                    Закрыть
                                                </button>
                                            </div>
                                            <div className="w-1/2 px-3">
                                                <button className="block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-blue-dark">
                                                    Заказать
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

function ListItem({ children, to }) {
    return (
        <li>
            <Link
                to={to}
                className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
            >
                {children}
            </Link>
        </li>
    );
}