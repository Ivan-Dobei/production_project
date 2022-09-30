import {classNames} from "shared/lib/classNames/classNames";
import cls from './NavBar.module.scss';
import {AppLink, LinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavBarProps {
    className?: string
}

export const NavBar = ({className}: NavBarProps) => {
    return (
        <div className={classNames(cls.NavBar, {}, [cls[className]])}>
            <ThemeSwitcher/>
            <div className={cls.links}>
                <AppLink
                    className={cls.mainLink}
                    theme={LinkTheme.SECONDARY}
                    to='/'
                >
                    MainPage
                </AppLink>
                <AppLink
                    theme={LinkTheme.SECONDARY}
                    to='/about'
                >
                    AboutPage
                </AppLink>
            </div>
        </div>
    );
};
