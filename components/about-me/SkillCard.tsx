import SVG from 'react-inlinesvg';
import { Skill } from '../../graphql';

export interface IToolboxCard {
    skill: Partial<Skill>
}

const SkillCard: React.FC<IToolboxCard> = ({ skill }) => {
    return (
        <div className="flex flex-col px-4 py-4 items-center justify-center bg-gray-50 rounded-md overflow-hidden min-w-[5rem] shadow-md">
            <div className="justify-center items-center pb-3 relative h-8 w-8">
                <SVG src={skill.icon as string} className="fill-orange-600" />
            </div>
            <p className="font-medium pt-3 dark:text-black">{skill.name}</p>
        </div>
    )
}

export default SkillCard

