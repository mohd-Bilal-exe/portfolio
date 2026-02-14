import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import AnimateString from '../../global/AnimateString';
import { pageHeading, pageName } from '../../../lib/fontClassNames';
import useMediaQuery from '../../../hooks/useMediaQuery';

const MediaPill = ({
  staticImg,
  staticImgLoader,
  imgClassName = 'object-cover',
  videoSrc,
  videoSrcLoader,
  videoClassName = '',
  alt,
  delayOffset = 0,
  isMobile = false,
}: {
  staticImg?: string;
  staticImgLoader?: () => Promise<string>;
  imgClassName?: string;
  videoSrc?: string;
  videoSrcLoader?: () => Promise<string>;
  videoClassName?: string;
  alt: string;
  delayOffset?: number;
  isMobile?: boolean;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [imgSrc, setImgSrc] = useState<string | undefined>(staticImg);
  const [videoSrcState, setVideoSrcState] = useState<string | undefined>(videoSrc);
  const [isLoading, setIsLoading] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const preloadAssets = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      if (!imgSrc && staticImgLoader) {
        const res = await staticImgLoader();
        setImgSrc(res);
      }
      if (!videoSrcState && videoSrcLoader) {
        const res = await videoSrcLoader();
        setVideoSrcState(res);
        if (videoRef.current) {
          // assign immediately so the player can load
          try {
            videoRef.current.src = res;
            videoRef.current.load();
          } catch (_) {}
        }
      }
    } catch (e) {
      // ignore individual asset loading failures
    } finally {
      setIsLoading(false);
    }
  };

  const handleMouseEnter = async () => {
    await preloadAssets();
    setIsHovered(true);
    if (videoRef.current) {
      try {
        videoRef.current.currentTime = 0;
        await videoRef.current.play();
      } catch (_) {
        // some browsers block autoplay until interaction
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.span
      className="inline-block relative shadow-sm mx-1.5 border border-white/10 rounded-full overflow-hidden align-middle"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onViewportEnter={preloadAssets}
      initial={{ width: 48, borderRadius: 24, opacity: 0, y: 15, filter: 'blur(5px)' }}
      animate={{
        width: isHovered ? 220 : isMobile ? 80 : 110,
        height: isHovered ? 100 : isMobile ? 30 : 45,
        borderRadius: 24,
      }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        opacity: { delay: delayOffset, duration: 0.5 },
        filter: { delay: delayOffset, duration: 0.5 },
        y: { delay: delayOffset, duration: 0.5 },
      }}
      style={{ height: '36px', verticalAlign: 'middle' }}
    >
      <img
        src={imgSrc}
        loading="lazy"
        alt={alt}
        className={twMerge(
          imgClassName,
          'absolute inset-0 w-full h-full transition-opacity duration-300',
          isHovered && isVideoPlaying ? 'opacity-0' : 'opacity-100'
        )}
      />

      <video
        ref={videoRef}
        src={videoSrcState}
        muted
        loop
        playsInline
        preload="none"
        onPlaying={() => setIsVideoPlaying(true)}
        onPause={() => setIsVideoPlaying(false)}
        onEnded={() => setIsVideoPlaying(false)}
        className={twMerge(
          videoClassName,
          'absolute inset-0 w-full h-full object-cover transition-opacity duration-300',
          isHovered && isVideoPlaying ? 'opacity-100' : 'opacity-0'
        )}
      />

      <div className="absolute inset-0 ring-1 ring-black/10 ring-inset pointer-events-none" />
    </motion.span>
  );
};

const About = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <section
      id="mohammad-bilal-about"
      className="flex items-center px-[10dvw] py-[10svh] w-full md:min-h-svh font-space-grotesk font-bold"
    >
      <div className="w-full md:max-w-7xl">
        {/* Header Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 py-6 md:py-10"
        >
          <div className="bg-zinc-700 w-12 h-px" />
          <span
            className={twMerge(
              pageName,
              'font-medium text-text-secondary  uppercase tracking-widest'
            )}
          >
            About Me
          </span>
        </motion.div>

        {/* Content Paragraph */}
        <div
          className={twMerge(
            pageHeading,
            'font-medium text-text-secondary/70 text-left leading-[1.6]'
          )}
        >
          {/* Sentence 1 */}
          <div className="mb-8">
            <AnimateString delayOffset={0.05}>Hey, I engineer</AnimateString>
            <AnimateString delayOffset={0.15} className="ml-1.5 text-text-primary/85">
              scalable digital experiences
            </AnimateString>
            <MediaPill
              alt="Coding"
              imgClassName="object-bottom object-cover"
              isMobile={isMobile}
              staticImgLoader={() =>
                import('../../../assets/Images/code.webp').then(m => m.default ?? m)
              }
              videoSrcLoader={() =>
                import('../../../assets/Videos/CodeVideo.mp4').then(m => m.default ?? m)
              }
              delayOffset={0.2}
            />
            <AnimateString delayOffset={0.25}>while eating Awadhi cuisine in</AnimateString>
            <AnimateString delayOffset={0.35} className="ml-2 text-text-primary/85">
              Lucknow, Uttar Pradesh, India
            </AnimateString>
            <MediaPill
              delayOffset={0.4}
              alt="Lucknow"
              isMobile={isMobile}
              staticImgLoader={() =>
                import('../../../assets/Images/lucknow.webp').then(m => m.default ?? m)
              }
              imgClassName="object-bottom object-cover"
              videoSrcLoader={() =>
                import('../../../assets/Videos/LucknowVideo.mp4').then(m => m.default ?? m)
              }
            />
            .
          </div>

          {/* Sentence 2 */}
          <div>
            <AnimateString delayOffset={0.45}>
              Away from the screens, my mood is fueled by
            </AnimateString>

            <AnimateString delayOffset={0.55} className="inline-block mx-1.5 text-text-primary/85">
              lifting heavy circles
            </AnimateString>

            <MediaPill
              delayOffset={0.6}
              alt="Gym"
              isMobile={isMobile}
              imgClassName="object-top object-cover"
              staticImgLoader={() =>
                import('../../../assets/Images/gym.webp').then(m => m.default ?? m)
              }
              videoSrcLoader={() =>
                import('../../../assets/Videos/GymVideo.mp4').then(m => m.default ?? m)
              }
            />

            <AnimateString delayOffset={0.65}>and ocassionaly finding different</AnimateString>

            <AnimateString delayOffset={0.75} className="inline-block mx-1.5 text-text-primary/85">
              perspectives
            </AnimateString>

            <MediaPill
              alt="Photography"
              delayOffset={0.8}
              isMobile={isMobile}
              imgClassName="object-[30%_30%] object-cover"
              staticImgLoader={() =>
                import('../../../assets/Images/Camera.webp').then(m => m.default ?? m)
              }
              videoSrcLoader={() =>
                import('../../../assets/Videos/PhotographyVideo.mp4').then(m => m.default ?? m)
              }
            />

            <AnimateString delayOffset={0.85}>through a lens.</AnimateString>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          className="flex justify-start items-center gap-3 opacity-60 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ delay: 0.6 }}
        >
          <span className="hidden md:inline-block font-hand text-text-secondary/70 text-xxs md:text-sm">
            (Hover the images to see them in action)
          </span>
          <span className="md:hidden inline-block font-hand text-text-secondary/70 text-sm md:text-xl">
            (Tap the images to see them in action)
          </span>
          <ArrowRight className="flex justify-center items-center size-5 md:size-6 text-text-secondary/70" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
