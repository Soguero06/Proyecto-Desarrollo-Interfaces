import { globalStyles } from '@/styles/global-styles';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/colors';
export default function DetalleScreen() {


return (
        <View style={styles.container}>
            {
                <View style={styles.card}>
                    <Image style={globalStyles.Logo} source={{ uri: equipo.logo }} />
                    <View>
                        <Text style={styles.textoNombre}>{equipo.nombre}</Text>
                        <Text style={styles.textoDetalle}>
                            {equipo.division} - {equipo.categoria}
                        </Text>
                    </View>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.Background,
        padding: 20,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 24,
        color: COLORS.Text,
        fontFamily: 'Oswald',
        marginBottom: 20,
    },
    card: {
        backgroundColor: COLORS.SecondaryBackground,
        marginBottom: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.Background,
        elevation: 3,
        width: "33%",
        padding: 10,
        alignItems: "center",
    },
    textoNombre: {
        color: COLORS.Text,
        fontSize: 32,
        fontFamily: "Oswald",
        textAlign: "center",
        marginTop: 5,
    },
    textoDetalle: {
        color: COLORS.SecondaryText,
        fontSize: 20,
        fontFamily: "Roboto",
        textAlign: "center",
        marginTop: 2,
    },
    Logo: {
        width: 200,
        height: 200,
        marginRight: 10,
    },
});