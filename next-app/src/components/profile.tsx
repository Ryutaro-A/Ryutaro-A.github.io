"use client";

import React from "react"
import Image from 'next/image'
import Link from 'next/link'


const Profile = () => {

    const logo_size = 100;
    const profile_image_size = 230;

    return (
    <div className="md:flex flex-row">
        <div className="basis-1/2">
            <div className="flex justify-center items-center">
            <Image
                className="rounded-full w-130 h-130 object-cover"
                src="/profile.jpg"
                width={profile_image_size}
                height={profile_image_size}
                alt="Ryutaro Asahara's profile image"
            />
            </div>
        </div>
        <div className="basis-1/2 text-center mt-9 md:text-left">
            <div className="text-3xl">Ryutaro Asahara</div>
            <div>
                Engineer ZOZO Inc.
            </div>
            <div>
                Email: ryu.pro1000[at]gmail.com
            </div>
            <br />
            <div className="flex flex-row ">
                <div className="basis-1/4">
                    <a className="inline-block" href="https://github.com/Ryutaro-A" target="_blank" rel="noopener noreferrer">
                        <Image
                        className="rounded w-10 h-10"
                        src="/github-mark.png"
                        width={logo_size}
                        height={logo_size}
                        alt="Ryutaro Asahara's profile image"
                        />
                    </a>
                </div>
                <div className="basis-1/4">
                    <Link className="inline-block" href="https://x.com/Ryu_pro_m" target="_blank" rel="noopener noreferrer">
                        <Image
                            className="rounded w-10 h-10"
                            src="/x-logo.png"
                            width={logo_size}
                            height={logo_size}
                            alt="Ryutaro Asahara's profile image"
                        />
                    </Link>
                </div>
                <div className="basis-1/4">
                    <Link className="inline-block" href="https://qiita.com/ryu1104" target="_blank" rel="noopener noreferrer">
                        <Image
                            className="rounded w-10 h-10"
                            src="/qiita-logo.png"
                            width={logo_size}
                            height={logo_size}
                            alt="Ryutaro Asahara's profile image"
                        />
                    </Link>
                </div>
                <div className="basis-1/4">
                    <Link className="inline-block" href="https://scholar.google.com/citations?user=PG5UIoAAAAAJ&hl=ja&oi=sra" target="_blank" rel="noopener noreferrer">
                        <Image
                            className="rounded w-10 h-10"
                            src="/glsr-logo.png"
                            width={logo_size}
                            height={logo_size}
                            alt="Ryutaro Asahara's profile image"
                        />
                    </Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Profile