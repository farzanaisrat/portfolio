
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import javascript from '../../assets/javascript.svg'
import react from '../../assets/react.svg'
import cplusplus from '../../assets/cplusplus.svg'
import python from '../../assets/python.svg'
import blender from '../../assets/blender.svg'
import git from '../../assets/git.svg'
import microsoftoffice from '../../assets/microsoftoffice.svg'



export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'react':
            return react;
        case 'c++':
            return cplusplus;
        case 'python':
            return python;
        case 'blender':
            return blender;
        case 'git':
            return git;
        case 'microsoftoffice':
            return microsoftoffice;
        default:
            break;
    }
}