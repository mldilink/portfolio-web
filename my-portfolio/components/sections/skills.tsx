import Image from 'next/image';

const skills = [
  { name: 'HTML', percentage: 100, icon: '/images/html.png' },
  { name: 'CSS', percentage: 90, icon: '/images/css.png' },
  { name: 'Javascript', percentage: 90, icon: '/images/javascript.png' },
  { name: 'Typescript', percentage: 80, icon: '/images/typescript.png' },
  { name: 'Sequelize', percentage: 80, icon: '/images/sequelize.png' },
  { name: 'Mongo DB', percentage: 75, icon: '/images/mongodb.png' },
];

export function Skills() {
  return (
    <section className='bg-black px-4 py-10 md:px-[120px] md:py-20'>
      <div className='mx-auto flex w-full max-w-[1200px] flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-8'>
        {/* Introduction */}
        <div className='flex w-full flex-col gap-6 md:min-h-[529px] md:max-w-[367px] md:justify-between'>
          <div className='flex flex-col gap-2 md:gap-4'>
            <h2 className='text-[32px] font-bold leading-[42px] tracking-[-0.04em] text-white md:text-[48px] md:leading-[60px] md:tracking-[-0.05em]'>
              Tools I Use to Build
            </h2>

            <p className='text-sm leading-7 text-[#A4A7AE] md:text-base md:leading-[30px] md:tracking-[-0.03em]'>
              From code to design — here’s the tech that helps me turn ideas
              into real products.
            </p>
          </div>

          <a
            href='#contact'
            className='flex h-12 w-full items-center justify-center gap-2 bg-[#149BB0] p-2 text-sm font-semibold text-white md:h-14 md:text-base'
          >
            <Image src='/images/mail.svg' alt='mail' width={24} height={24} />
            Send Message
          </a>
        </div>

        {/* Skills */}
        <div className='flex w-full items-start gap-6 md:max-w-[642px]'>
          {/* Vertical Indicator - Desktop */}
          <div className='relative hidden h-[529px] w-px shrink-0 bg-[#22252B] md:block'>
            <div className='absolute left-0 top-0 h-[193px] w-1 -translate-x-1/2 bg-white' />
          </div>

          {/* Skills List */}
          <div className='flex w-full flex-col gap-[15px]'>
            {skills.map((skill, index) => (
              <div key={skill.name}>
                <div className='flex h-[60px] items-center justify-between gap-1'>
                  {/* Technology */}
                  <div className='flex shrink-0 items-center gap-[3px]'>
                    <div className='flex size-[60px] shrink-0 items-center justify-center'>
                      <Image
                        src={skill.icon}
                        alt=''
                        width={35}
                        height={35}
                        className='max-h-[44px] max-w-[44px] object-contain'
                      />
                    </div>

                    <span className='whitespace-nowrap text-base leading-[30px] tracking-[-0.03em] text-white md:text-xl md:leading-[34px]'>
                      {skill.name}
                    </span>
                  </div>

                  {/* Percentage */}
                  <span className='text-right text-base font-bold leading-[30px] tracking-[-0.02em] text-white md:text-xl md:leading-[34px] md:tracking-normal'>
                    {skill.percentage}%
                  </span>
                </div>

                {index !== skills.length - 1 && (
                  <div className='h-px w-full bg-[#22252B]' />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
