import { COLORS } from '@/constants/colors';
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    encabezado1: {
        color: COLORS.HeaderText,
        fontSize: 16,
    },
    item: {
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    Logo: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
});