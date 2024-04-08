import { Crown, Flame, Medal, PawPrint, Sparkle, UserRound, Users } from "lucide-react";

interface IconProps {
    name: string;
}

const icons: { [key: string]: JSX.Element } = {
    user: <UserRound />,
    users: <Users />,
    flame: <Flame />,
    medal: <Medal />,
    pawprint: <PawPrint />,
    sparkle: <Sparkle />,
    crown: <Crown />
}

export function Icon({name}: IconProps) {
    return icons[name];
}