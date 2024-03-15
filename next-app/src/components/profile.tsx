"use client";

import React from "react"
import Image from 'next/image'
import Grid from '@mui/material/Grid';
import Link from 'next/link'


const Profile = () => {

    return (
    <Grid container spacing={2}>
        <Grid item xs={5}>
            <div className="flex justify-center items-center">
            <Image
                className="rounded-full w-100 h-100 object-cover"
                src="/static/profile.jpg"
                width={180}
                height={180}
                alt="Ryutaro Asahara's profile image"
            />
            </div>
        </Grid>
        <Grid item xs={5}>
            <div className="text-3xl">
                Ryutaro Asahara
            </div>
            <div>
                M2, The Department of Informatics, The University of Electro-Communications.
            </div>
            <div>
                <a href="https://www.inaba.aix.uec.ac.jp/" target="_blank" rel="noopener noreferrer">Inaba Lab.</a>
            </div>
            <div>
                Email: ryu1104.as[at]gmail.com
            </div>
            <br />
            <div>
                {/* <a href="https://github.com/Ryutaro-A" target="_blank" rel="noopener noreferrer">Github</a> */}
                <Link href="https://example.com" passHref>
                    {/* <a> */}
                    <img
                    className="rounded w-20 h-20"
                    src="/static/github-mark.png"
                    width={20}
                    height={20}
                    alt="Ryutaro Asahara's profile image"
                    />
                    {/* </a> */}
                </Link>
            </div>
            <div>
                <a href="https://twitter.com/Ryu_pro_m" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
        </Grid>
    </Grid>
    )
}

export default Profile