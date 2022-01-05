import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('white', 'darkBg')(props),
      },
    }),
  },
  fonts: {
    body: 'Work Sans',
  },
  components: {
    Link: {
      baseStyle: {
        _focus: {
          ring: 0,
        },
      },
    },
  },
  colors: {
    darkBg: '#151719',
    brand: {
      50: '#e2eeff',
      100: '#b3ccff',
      200: '#83aafd',
      300: '#5288f9',
      400: '#2366f6',
      500: '#094cdc',
      600: '#023bac',
      700: '#002a7c',
      800: '#00194d',
      900: '#00081f',
    },
  },
});

export default theme;
