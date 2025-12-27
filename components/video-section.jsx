import React from 'react'

const VideoSection = () => {
    return (
        <section className="bg-gradient-to-br from-[#05071C] to-[#0F2A45] px-4 py-20">

            <div className="container mx-auto max-w-4xl">

                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                        Webinar Preview
                    </h2>
                    <p className="mx-auto max-w-2xl text-pretty text-lg text-gray-300">
                        Get a sneak peek into what you'll learn in our comprehensive webinar through this exclusive preview video.
                    </p>
                </div>

                <iframe
                    className="w-full h-full rounded-xl overflow-hidden aspect-video"
                    src="https://www.youtube.com/embed/DL4lIhdKhOc?si=y-OcpLpknVfGSTVU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>

            </div>

        </section>
    )
}

export default VideoSection