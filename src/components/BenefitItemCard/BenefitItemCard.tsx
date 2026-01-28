import React from 'react'
import './BenefitItemCard.css'

export interface BenefitItemCardProps {
  icon: {
    src: string
    alt?: string
    width?: number | string
    height?: number | string
    className?: string
  }
  heading: string
  description: string | React.ReactNode
  containerId?: string
  layoutId?: string
  containerClassName?: string
  layoutClassName?: string
  headingTag?: 'h5' | 'h6'
  headingClassName?: string
  strongClassName?: string
  descriptionClassName?: string
  variant?: 'default' | 'manager-grid' | 'career-grid' | 'industries-grid'
  borderClassName?: string
  innerBoxClassName?: string
  headingWrapperClassName?: string
}

export const BenefitItemCard = ({
  icon,
  heading,
  description,
  containerId,
  layoutId,
  containerClassName,
  layoutClassName,
  headingTag = 'h5',
  headingClassName,
  strongClassName = 'bold-text-7',
  descriptionClassName,
  variant = 'default',
  borderClassName,
  innerBoxClassName,
  headingWrapperClassName,
}: BenefitItemCardProps) => {
  const HeadingTag = headingTag

  // Default classes based on variant
  const defaultContainerClassName =
    variant === 'manager-grid'
      ? 'home-one-manager-grid-block relative overflow style-none'
      : variant === 'career-grid'
      ? 'w-layout-blockcontainer career-data-grid-box w-container'
      : variant === 'industries-grid'
      ? 'home-three-future-grid-item'
      : 'w-layout-blockcontainer container-3 w-container'
  const defaultLayoutClassName =
    variant === 'manager-grid'
      ? 'home-one-manager-grid-inner-box-one'
      : variant === 'career-grid'
      ? 'career-data-grid-heading'
      : variant === 'industries-grid'
      ? 'about-one-card-inner-one'
      : 'w-layout-layout quick-stack-2 wf-layout-layout'
  const defaultHeadingClassName =
    variant === 'manager-grid'
      ? 'home-one-manager-grid-text-heading-two'
      : variant === 'career-grid'
      ? 'heading'
      : variant === 'industries-grid'
      ? 'about-one-manage-card-heading'
      : 'heading-8'
  const defaultDescriptionClassName =
    variant === 'manager-grid'
      ? 'text-block-6 margin-grid-paragraph'
      : variant === 'industries-grid'
      ? 'career-grid-paragraph'
      : 'text-block-5'

  if (variant === 'manager-grid') {
    return (
      <div id={containerId} className={containerClassName || defaultContainerClassName}>
        <div className={`home-one-grid-border absolute ${borderClassName || ''}`}></div>
        <div id={layoutId} className={innerBoxClassName || defaultLayoutClassName}>
          <img
            src={icon.src}
            loading="lazy"
            width={icon.width || 51}
            height={icon.height || 51}
            alt={icon.alt || ''}
            className={icon.className || 'home-one-manager-icon'}
          />
          <div className={headingWrapperClassName || defaultHeadingClassName}>
            <strong>{heading}</strong>
          </div>
        </div>
        {typeof description === 'string' ? (
          <div className={descriptionClassName || defaultDescriptionClassName}>{description}</div>
        ) : (
          <div className={descriptionClassName || defaultDescriptionClassName}>{description}</div>
        )}
      </div>
    )
  }

  if (variant === 'career-grid') {
    return (
      <div id={containerId} className={containerClassName || defaultContainerClassName}>
        <div id={layoutId} className={innerBoxClassName || defaultLayoutClassName}>
          <img
            src={icon.src}
            loading="lazy"
            width={icon.width || 51}
            height={icon.height}
            alt={icon.alt || ''}
            className={icon.className}
          />
          <HeadingTag className={headingClassName || defaultHeadingClassName}>
            {strongClassName ? (
              <strong className={strongClassName}>{heading}</strong>
            ) : (
              <strong>{heading}</strong>
            )}
          </HeadingTag>
        </div>
        {typeof description === 'string' ? (
          <div className={descriptionClassName || defaultDescriptionClassName}>{description}</div>
        ) : (
          <div className={descriptionClassName || defaultDescriptionClassName}>{description}</div>
        )}
      </div>
    )
  }

  if (variant === 'industries-grid') {
    return (
      <div id={containerId} className={containerClassName || defaultContainerClassName}>
        <div id={layoutId} className={innerBoxClassName || defaultLayoutClassName}>
          <img
            src={icon.src}
            loading="lazy"
            width={icon.width || 51}
            height={icon.height || 51}
            alt={icon.alt || ''}
            className={icon.className || 'auto-fit about-one-card-icon'}
          />
          <div className={headingWrapperClassName || defaultHeadingClassName}>{heading}</div>
        </div>
        {typeof description === 'string' ? (
          <div className={descriptionClassName || defaultDescriptionClassName}>{description}</div>
        ) : (
          <div className={descriptionClassName || defaultDescriptionClassName}>{description}</div>
        )}
      </div>
    )
  }

  // Default variant (original structure)
  return (
    <div id={containerId} className={containerClassName || defaultContainerClassName}>
      <div id={layoutId} className={layoutClassName || defaultLayoutClassName}>
        <div className="w-layout-cell">
          <img
            src={icon.src}
            loading="lazy"
            width={icon.width || 51}
            height={icon.height}
            alt={icon.alt || ''}
            className={icon.className}
          />
        </div>
        <div className="w-layout-cell">
          <HeadingTag className={headingClassName || defaultHeadingClassName}>
            {strongClassName ? (
              <strong className={strongClassName}>{heading}</strong>
            ) : (
              <strong>{heading}</strong>
            )}
          </HeadingTag>
        </div>
      </div>
      {typeof description === 'string' ? (
        <div className={descriptionClassName || defaultDescriptionClassName}>{description}</div>
      ) : (
        <div className={descriptionClassName || defaultDescriptionClassName}>{description}</div>
      )}
    </div>
  )
}
