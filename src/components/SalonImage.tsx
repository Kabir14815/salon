import { useEffect, useState, type ImgHTMLAttributes } from 'react'
import { fallbackImage } from '../data/images'

type SalonImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fetchPriority?: 'high' | 'low' | 'auto'
}

export default function SalonImage({
  src,
  alt,
  onError,
  fetchPriority,
  ...props
}: SalonImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src ?? fallbackImage)

  useEffect(() => {
    setCurrentSrc(src ?? fallbackImage)
  }, [src])

  return (
    <img
      {...props}
      src={currentSrc}
      alt={alt ?? ''}
      loading={props.loading ?? 'lazy'}
      decoding="async"
      fetchPriority={fetchPriority}
      referrerPolicy="no-referrer"
      onError={(e) => {
        if (currentSrc !== fallbackImage) {
          setCurrentSrc(fallbackImage)
        }
        onError?.(e)
      }}
    />
  )
}
