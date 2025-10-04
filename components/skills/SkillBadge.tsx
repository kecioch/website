import Image from "next/image";
import styles from "./SkillBadge.module.css";

export interface SkillBadgeData {
  title: string;
  iconPath: string;
}

const SkillBadge = ({ title, iconPath }: SkillBadgeData) => {
  return (
    <div className="flex justify-center flex-col gap-2 transition-all hover:scale-110">
      <div className={styles.background}>
        <Image src={iconPath} alt={title} width={40} height={40} className="w-auto h-auto" />
      </div>
      <span className="text-center ">{title}</span>
    </div>
  );
};

export default SkillBadge;
