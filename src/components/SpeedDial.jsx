'use client';

import {
    IconButton,
    SpeedDial,
    SpeedDialAction,
    SpeedDialContent,
    SpeedDialHandler,
} from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';

const SpeedDialComponent = () => {
    return (
        <div>
            <SpeedDial className="">
                <SpeedDialHandler>
                    <IconButton
                        size="lg"
                        className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                    >
                        <Image
                            src="/images/rocket.png"
                            width={100}
                            height={100}
                            alt="rocket"
                            style={{ transform: `scaleX(-1)` }}
                        />
                    </IconButton>
                </SpeedDialHandler>
                <SpeedDialContent>
                    <SpeedDialAction>
                        <Link
                            href={`https://api.whatsapp.com/send?phone=918848253891&text=Hi, I'm [Your Name] from [location]. I'm writing to express my interest in learning more about your [Product/Service name] and potentially exploring how it can benefit [Your company/personal needs]. If possible, I would also appreciate a call back from your team to discuss my requirements in more detail and address any questions I may have. I'm available at [Your phone number] on [Mention your preferred days and times for a call].`}
                        >
                            <i className="ri-whatsapp-fill p-1 text-2xl text-[#63cfb6]"></i>
                        </Link>
                    </SpeedDialAction>
                    <SpeedDialAction>
                        <Link href={`tel:919535818200`}>
                            <i className="ri-phone-fill p-1 text-2xl text-blue-400"></i>
                        </Link>
                    </SpeedDialAction>
                    <SpeedDialAction>
                        <Link href={`/contact-sales`}>
                            <i className="ri-mail-send-fill p-1 text-2xl text-purple-300"></i>
                        </Link>
                    </SpeedDialAction>
                </SpeedDialContent>
            </SpeedDial>
        </div>
    );
};

export default SpeedDialComponent;
