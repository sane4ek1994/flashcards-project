import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'24'}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={'24'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g clipPath={'url(#clip0_5661_1968)'}>
      <path
        d={
          'M11.809 0.479994H11.8982C14.0506 0.479994 16.0646 1.06847 17.7898 2.09279L17.737 2.06303C19.5331 3.11327 20.9875 4.56767 22.008 6.30815L22.0378 6.36383C23.0362 8.06207 23.6256 10.104 23.6256 12.2832C23.6256 17.473 20.2819 21.8832 15.6317 23.4749L15.5482 23.4998C15.4877 23.519 15.4186 23.5296 15.3475 23.5296C15.192 23.5296 15.048 23.4778 14.9318 23.3914L14.9338 23.3923C14.8109 23.2819 14.7341 23.1226 14.7341 22.945C14.7341 22.9402 14.7341 22.9354 14.7341 22.9315V22.9325C14.7341 22.9018 14.7366 22.5094 14.7418 21.7555C14.7469 21.0016 14.7494 20.3123 14.7494 19.6877C14.7562 19.6157 14.76 19.5331 14.76 19.4486C14.76 18.6883 14.4499 18.001 13.9498 17.5046C14.543 17.4461 15.0787 17.3482 15.599 17.2118L15.5261 17.2282C16.0762 17.0746 16.5562 16.8701 17.0016 16.6118L16.9718 16.6282C17.4595 16.3594 17.8723 16.0176 18.2122 15.6125L18.2179 15.6058C18.575 15.1488 18.8544 14.6112 19.0243 14.0266L19.033 13.993C19.2336 13.3373 19.3488 12.5837 19.3488 11.8032C19.3488 11.76 19.3488 11.7158 19.3478 11.6726V11.6794C19.3478 11.6582 19.3488 11.6342 19.3488 11.6102C19.3488 10.4122 18.8861 9.32256 18.1306 8.50944L18.1334 8.51231C18.2947 8.08991 18.3878 7.60223 18.3878 7.09247C18.3878 6.46943 18.2486 5.87999 18 5.35103L18.0106 5.37599C17.9002 5.35487 17.7744 5.34239 17.6448 5.34239C17.3242 5.34239 17.0218 5.41727 16.753 5.54975L16.7645 5.54495C16.2192 5.74655 15.7526 5.97503 15.313 6.24191L15.3494 6.22079L14.7648 6.58943C13.8797 6.33599 12.863 6.19007 11.8128 6.19007C10.7626 6.19007 9.74592 6.33599 8.78208 6.60863L8.85984 6.58943C8.696 6.47679 8.47808 6.33823 8.20608 6.17375C7.848 5.96831 7.42464 5.76959 6.98496 5.60255L6.9216 5.58143C6.64032 5.43359 6.3072 5.34719 5.95296 5.34719C5.83392 5.34719 5.7168 5.35679 5.60352 5.37599L5.616 5.37407C5.37792 5.87711 5.23872 6.46751 5.23872 7.09055C5.23872 7.60031 5.33184 8.08896 5.50272 8.5392L5.49312 8.51136C4.73952 9.3216 4.27776 10.4112 4.27776 11.6093C4.27776 11.6333 4.27776 11.6582 4.27872 11.6822V11.6784C4.27776 11.7158 4.27776 11.759 4.27776 11.8032C4.27776 12.5798 4.39296 13.3306 4.608 14.0371L4.5936 13.9824C4.77504 14.5997 5.05056 15.1363 5.4096 15.6077L5.40096 15.5952C5.7408 16.0128 6.15168 16.3565 6.61728 16.6147L6.6384 16.6253C7.05312 16.8672 7.53408 17.0717 8.04 17.2147L8.08416 17.2253C8.53152 17.3453 9.0672 17.4432 9.61536 17.4979L9.65952 17.5018C9.24576 17.9126 8.97024 18.4618 8.90688 19.0742L8.90592 19.0858C8.7072 19.1827 8.47584 19.2614 8.23488 19.3123L8.21472 19.3162C7.96896 19.3651 7.68768 19.393 7.39872 19.393C7.3776 19.393 7.35648 19.393 7.33536 19.393H7.33824C6.96 19.3853 6.61248 19.2624 6.32544 19.0589L6.3312 19.0627C5.97504 18.8141 5.68704 18.4915 5.48544 18.1162L5.47872 18.1018C5.28864 17.7792 5.03808 17.5123 4.74144 17.3078L4.7328 17.3021C4.5168 17.1398 4.2624 17.0131 3.98784 16.9373L3.97248 16.9334L3.66528 16.8874C3.6432 16.8854 3.61728 16.8845 3.59136 16.8845C3.45696 16.8845 3.32928 16.9114 3.21312 16.9584L3.21984 16.9555C3.13792 17.0016 3.11232 17.0605 3.14304 17.1322C3.18048 17.2147 3.22656 17.2858 3.28224 17.3482L3.28128 17.3472C3.33984 17.4163 3.40608 17.4768 3.47808 17.5296L3.48096 17.5315L3.58848 17.6083C3.86016 17.7504 4.08384 17.9482 4.25376 18.1872L4.2576 18.193C4.44096 18.4205 4.60224 18.6778 4.73184 18.9533L4.74144 18.9763L4.89504 19.3296C5.02464 19.7155 5.25984 20.0381 5.56704 20.2714L5.57184 20.2752C5.85984 20.4998 6.20736 20.6611 6.58656 20.7341L6.60192 20.736C6.91872 20.7974 7.28736 20.8358 7.66368 20.8435H7.6704C7.7136 20.8454 7.76352 20.8454 7.8144 20.8454C8.06496 20.8454 8.31072 20.8253 8.55072 20.7859L8.5248 20.7898L8.87808 20.7283C8.87808 21.1181 8.88064 21.5718 8.88576 22.0896C8.89088 22.6074 8.89344 22.8867 8.89344 22.9277V22.9411C8.89344 23.1187 8.81664 23.2781 8.69376 23.3885C8.57952 23.4739 8.43552 23.5258 8.27904 23.5258C8.20704 23.5258 8.13792 23.5152 8.0736 23.495L8.0784 23.496C3.34656 21.8746 0.00576019 17.4643 0.00576019 12.2736C0.00576019 10.0963 0.59328 8.05631 1.61952 6.30335L1.5888 6.35903C2.63904 4.56287 4.09344 3.10847 5.83392 2.08799L5.8896 2.05823C7.55904 1.06559 9.5712 0.479034 11.7197 0.479034H11.8138H11.809V0.479994ZM4.47456 17.4394C4.50528 17.3677 4.46944 17.3062 4.36704 17.255C4.26464 17.2243 4.19808 17.2346 4.16736 17.2858C4.13664 17.3574 4.17248 17.4189 4.27488 17.4701C4.36704 17.5315 4.4336 17.5213 4.47456 17.4394ZM4.95168 17.9626C5.02336 17.9114 5.01312 17.8294 4.92096 17.7168C4.81856 17.6246 4.73664 17.6093 4.6752 17.6707C4.60352 17.7219 4.61376 17.8038 4.70592 17.9165C4.80768 18.017 4.8896 18.032 4.95168 17.9616V17.9626ZM5.41248 18.6538C5.50464 18.5821 5.50464 18.4848 5.41248 18.3619C5.33056 18.2288 5.24352 18.1981 5.15136 18.2698C5.0592 18.321 5.0592 18.4131 5.15136 18.5462C5.24352 18.6794 5.33056 18.7152 5.41248 18.6538ZM6.0576 19.2998C6.13952 19.2179 6.11904 19.1206 5.99616 19.008C5.87328 18.8851 5.77088 18.8698 5.68896 18.9619C5.5968 19.0438 5.61728 19.1411 5.7504 19.2538C5.87328 19.3766 5.97568 19.3907 6.0576 19.296V19.2998ZM6.93408 19.6838C6.9648 19.5712 6.89824 19.4893 6.7344 19.4381C6.5808 19.3971 6.48352 19.433 6.44256 19.5456C6.4016 19.6582 6.46816 19.735 6.64224 19.776C6.79584 19.8381 6.89312 19.8074 6.93408 19.6838ZM7.90272 19.7606C7.90272 19.6275 7.81568 19.5712 7.6416 19.5917C7.47776 19.5917 7.39584 19.648 7.39584 19.7606C7.39584 19.8938 7.48288 19.9501 7.65696 19.9296C7.8208 19.9302 7.90272 19.8733 7.90272 19.7606ZM8.79456 19.607C8.77408 19.4944 8.68192 19.4483 8.51808 19.4688C8.35424 19.4995 8.28256 19.5763 8.30304 19.6992C8.32352 19.8221 8.41568 19.863 8.57952 19.8221C8.74336 19.7811 8.8144 19.7094 8.79456 19.607Z'
        }
        fill={'black'}
      />
    </g>
    <defs>
      <clipPath id={'clip0_5661_1968'}>
        <rect fill={'white'} height={'24'} width={'24'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
