import React from 'react'

export const Header = (props) => {
  return (
    <svg width='375' height='174' viewBox='0 0 375 174'>
      <defs>
        <path id='aa' d='M0 0h375v174H0z'/>
        <radialGradient
          id='ee'
          cy='22.572%'
          r='84.639%'
          fx='50%'
          fy='22.572%'
          gradientTransform='matrix(0 1 -.671 0 .651 -.274)'
        >
          <stop offset='0%' stop-color={props.colorScheme.stopColorOne}/>
          <stop offset='100%' stop-color={props.colorScheme.stopColorTwo}/>
        </radialGradient>
        <path
          id='dd'
          d='M99 154C13.396 154-56 84.604-56-1S13.396-156 99-156
            254-86.604 254-1 184.604 154 99 154zm185-39c-14.912
            0-27-12.088-27-27s12.088-27 27-27 27 12.088 27 27-12.088
            27-27 27zm71.5-62C327.61 53 305 30.39 305 2.5S327.61-48
            355.5-48 406-25.39 406 2.5 383.39 53 355.5 53z'
        />
        <filter
          id='cc'
          width='116.2%'
          height='124.2%'
          x='-8.1%'
          y='-12.1%'
          filterUnits='objectBoundingBox'
        >
          <feOffset in='SourceAlpha' result='shadowOffsetOuter1'/>
          <feGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='12.5'/>
          <feColorMatrix in='shadowBlurOuter1' values={props.colorScheme.headerShadow}/>
        </filter>
      </defs>
      <g fill='none' fill-rule='evenodd'>
        <mask id='bb' fill='#fff'>
          <use href='#aa'/>
        </mask>
        <g fill-rule='nonzero' mask='url(#bb)'>
          <use fill='#000' filter='url(#cc)' href='#dd'/>
          <use fill='url(#ee)' href='#dd'/>
        </g>
        <g mask='url(#bb)'>
          <path d='M36 36h150v65H36z'/>
          <path
            fill='#FFF'
            fill-rule='nonzero'
            d='M67.537 64.938c-.539.044-2.161.122-2.762.235.045 3.071-.182 7.388-1.675 10.143-1.492 2.756-3.267 4.758-6.375 6.58-3.108 1.82-6.94 2.35-9.654 2.326-2.714-.023-5.083-.565-6.572-1.831-1.489-1.266-1.718-3.12-1.336-5.004.382-1.884 1.49-3.765 3.707-5.932 2.217-2.168 4.416-3.654 7.5-5.207 3.086-1.552 6.575-2.658 9.133-3.099-.576-.361-1.608-.696-2.347-.896-.738-.2-3.07-.802-4.939-1.432-1.87-.63-3.273-1.44-4.19-2.255-.916-.814-1.399-2.052-1.542-3.67-.143-1.62.114-4.346 1.543-6.762 1.428-2.416 2.892-4.253 5.267-5.828 2.376-1.575 4.458-2.49 6.851-2.49s3.738.588 4.486 1.395c.748.807 1.155 2.133 1.13 3.593-.024 1.461-.337 2.665-1.8 4.877-1.462 2.212-3.225 3.646-5.147 4.91-1.922 1.264-2.474-.643-1.415-1.402 1.06-.76 2.133-1.792 2.932-3.194.799-1.402 1.156-2.585 1.07-3.55-.085-.965-.64-1.403-1.665-1.314-1.459.126-3.047 1.18-4.764 3.164-1.718 1.983-2.506 3.768-2.366 5.356.097 1.089.452 1.92 1.066 2.495.614.574 1.39 1.048 3.727 1.839 2.337.79 2.978 1.127 4.002 1.744 1.025.617 1.97 1.513 2.56 2.524l3.532-.349c-.01-.452-.02-.851-.033-1.197-.031-.9.328-1.613 1.079-2.14.75-.528 1.688-.792 2.813-.792.657 0 1.133.132 1.43.396.297.263.461.783.493 1.558 0 .776.015 1.35.047 1.722 1-1.24 1.985-2.133 2.954-2.675.969-.543 2-.815 3.094-.815 1.751 0 3.181.698 4.291 2.094 1.11 1.396 1.665 3.226 1.665 5.49 0 1.644-.266 3.242-.798 4.793a15.61 15.61 0 0 1-2.203 4.234c.656.186 1.203.28 1.64.28 1.032 0 2.017-.373 2.955-1.118.525-.416 1.133-.988 1.824-1.715-.09-.621-.136-1.274-.136-1.96 0-2.14.453-4.134 1.36-5.98.906-1.845 2.165-3.31 3.775-4.396 1.61-1.086 3.43-1.629 5.462-1.629 1.813 0 3.267.535 4.361 1.606 1.094 1.07 1.641 2.52 1.641 4.35 0 2.14-.773 3.978-2.32 5.514-1.548 1.535-4.166 2.753-7.855 3.652.782 1.427 2.266 2.14 4.455 2.14 1.406 0 3.008-.488 4.806-1.465a15.866 15.866 0 0 0 2.768-1.906c-.048-.443-.072-.9-.072-1.374 0-2.513.5-4.715 1.5-6.608 1.001-1.892 2.298-3.35 3.893-4.373 1.594-1.024 3.266-1.536 5.017-1.536 1.72 0 3.056.504 4.009 1.513.953 1.008 1.43 2.303 1.43 3.885 0 1.302-.289 2.404-.867 3.303-.579.9-1.337 1.35-2.274 1.35-.594 0-1.071-.14-1.43-.42-.36-.278-.54-.666-.54-1.162 0-.218.031-.466.094-.745.062-.28.11-.48.14-.605.157-.465.235-.9.235-1.303 0-.403-.102-.713-.305-.93-.203-.217-.492-.326-.867-.326-.72 0-1.391.318-2.017.954-.625.636-1.125 1.497-1.5 2.582-.375 1.086-.563 2.28-.563 3.583 0 3.598 1.579 5.397 4.736 5.397 1.282 0 2.665-.426 4.15-1.28 1.183-.679 2.351-1.63 3.504-2.85-.007-.546-.01-1.123-.01-1.732 0-4.777.492-9.756 1.476-14.936.985-5.18 2.439-9.53 4.361-13.051 1.923-3.52 4.228-5.281 6.917-5.281 1.438 0 2.602.613 3.493 1.838s1.336 2.815 1.336 4.769c0 3.133-.922 6.382-2.766 9.748-1.845 3.365-4.845 7.297-9.003 11.795a85.8 85.8 0 0 0-.14 4.978c1.5-3.877 3.219-6.692 5.157-8.445 1.938-1.752 3.751-2.629 5.44-2.629 1.563 0 2.82.528 3.774 1.582.954 1.055 1.43 2.358 1.43 3.909 0 1.706-.437 3.272-1.313 4.7-.875 1.426-2.375 2.698-4.501 3.814.125.838.508 1.513 1.149 2.024.64.512 1.414.768 2.32.768.97 0 1.908-.372 2.814-1.117.777-.638 1.76-1.64 2.951-3.008a28.462 28.462 0 0 1-.278-4.11c0-3.785.492-8.096 1.477-12.935.985-4.84 2.438-8.996 4.36-12.47 1.923-3.474 4.213-5.211 6.87-5.211 1.5 0 2.681.69 3.54 2.07.86 1.38 1.29 3.358 1.29 5.933 0 3.691-1.031 7.972-3.095 12.842-2.063 4.87-4.86 9.693-8.393 14.47.219 1.272.578 2.179 1.078 2.722.5.543 1.157.814 1.97.814 1.282 0 2.407-.364 3.376-1.093.55-.414 1.186-.995 1.907-1.744a14.606 14.606 0 0 1-.125-1.955c0-2.14.453-4.134 1.36-5.98.906-1.845 2.164-3.31 3.774-4.396 1.61-1.086 3.431-1.629 5.463-1.629 1.813 0 3.267.535 4.361 1.606 1.094 1.07 1.641 2.52 1.641 4.35 0 2.14-.774 3.978-2.321 5.514-1.547 1.535-4.181 2.753-7.901 3.652.75 1.427 2.016 2.14 3.798 2.14 1.282 0 2.337-.294 3.165-.884.829-.589 1.79-1.582 2.884-2.977.375-.466.797-.698 1.266-.698.406 0 .727.186.961.558.235.372.352.884.352 1.535 0 1.117-.266 2.079-.797 2.885a9.104 9.104 0 0 1-3.447 3.118c-1.422.744-3.118 1.116-5.087 1.116-3.001 0-5.33-.892-6.987-2.675a8.488 8.488 0 0 1-.747-.927 18.71 18.71 0 0 1-2.512 2.02c-1.579 1.055-3.368 1.582-5.369 1.582-2.75 0-4.79-1.24-6.12-3.722a13.273 13.273 0 0 1-.386-.785c-1.089 1.193-2.187 2.184-3.294 2.972-1.438 1.023-3.142 1.535-5.111 1.535-2.407 0-4.345-.682-5.815-2.047-1.469-1.365-2.203-3.18-2.203-5.444 0-1.21.625-2.078 1.875-2.605 1.376-.59 2.36-1.218 2.954-1.885.594-.667.891-1.481.891-2.443 0-.558-.117-.977-.351-1.256-.235-.279-.524-.419-.868-.419-.844 0-1.774.605-2.79 1.815s-1.962 2.768-2.837 4.676a33.327 33.327 0 0 0-2.063 5.886c-.344 1.458-.742 2.443-1.196 2.955-.453.511-1.164.767-2.133.767-.97 0-1.68-.349-2.134-1.047-.356-.548-.62-1.332-.794-2.35a15.042 15.042 0 0 1-3.05 1.932c-2.048.977-4.026 1.465-5.932 1.465-3.064 0-5.448-.86-7.151-2.582a8.519 8.519 0 0 1-.917-1.094 21.209 21.209 0 0 1-2.881 1.908 13.675 13.675 0 0 1-6.776 1.768c-3.283 0-5.83-.884-7.643-2.652a8.485 8.485 0 0 1-.896-1.024 19.094 19.094 0 0 1-2.55 2.094c-1.548 1.055-3.307 1.582-5.276 1.582-1.657 0-3.001-.59-4.033-1.768-1.782 1.148-3.641 1.737-5.58 1.768-.406 5.987-1.328 10.989-2.766 15.006C68.79 98.992 66.68 101 63.898 101c-1.689 0-2.939-.605-3.752-1.815-.812-1.21-1.219-2.884-1.219-5.025 0-3.04.703-6.583 2.11-10.631s3.58-8.507 6.518-13.377c0-2.01-.006-3.748-.018-5.214zM73 76c1.263-.251 2.43-.871 3.5-1.86 1.07-.99 1.921-2.214 2.553-3.674.631-1.46.947-2.991.947-4.593 0-.942-.21-1.656-.632-2.143-.42-.487-.982-.73-1.684-.73-1.263 0-2.79 1.193-4.579 3.58a259.462 259.462 0 0 0-.052 6.076c0 1.444-.018 2.559-.053 3.344zm-8.925 21c.774 0 1.42-1.815 1.936-5.445.516-3.63.846-8.148.989-13.555-1.233 3.09-2.208 6.04-2.925 8.851-.717 2.812-1.075 5.175-1.075 7.09 0 .99.108 1.746.323 2.271.215.525.466.788.752.788zm34.39-35c-.972 0-1.792.673-2.461 2.02-.67 1.347-1.004 2.976-1.004 4.886V69c1.549-.438 2.769-1.096 3.661-1.973.893-.877 1.339-1.895 1.339-3.054 0-.595-.138-1.073-.413-1.433-.276-.36-.65-.54-1.122-.54zm38.213-22c-.587 0-1.24.811-1.958 2.433-.718 1.622-1.411 3.811-2.08 6.567-.67 2.756-1.216 5.756-1.64 9a33.697 33.697 0 0 0 5.017-7.512c1.322-2.708 1.983-5.165 1.983-7.37 0-1.008-.114-1.78-.343-2.315-.228-.535-.554-.803-.979-.803zm24.877 1c-.792 0-1.686 1.265-2.684 3.794-.998 2.53-1.875 5.669-2.632 9.417-.757 3.749-1.17 7.345-1.239 10.789 2.443-3.566 4.387-7.139 5.832-10.72 1.445-3.581 2.168-6.85 2.168-9.806 0-2.316-.482-3.474-1.445-3.474zm11.91 21c-.972 0-1.792.673-2.461 2.02-.67 1.347-1.004 2.976-1.004 4.886V69c1.549-.438 2.769-1.096 3.661-1.973.893-.877 1.339-1.895 1.339-3.054 0-.595-.138-1.073-.413-1.433-.276-.36-.65-.54-1.122-.54zM46.015 77.212c.126 1.51 1.331 1.946 3.575 1.74 1.237-.113 3.645-.569 5.533-1.74 1.888-1.171 3.53-2.656 4.56-4.843.461-.979.85-2.097 1.059-3.257.256-1.43.273-2.84.25-3.112-3.906.77-7.643 2.285-10.682 4.592-3.04 2.306-4.472 4.513-4.296 6.62z'/>
        </g>
      </g>
    </svg>
  )
}

export default Header
