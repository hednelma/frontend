import React, { useContext } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Login from "./src/screens/visitantes/login"
import Register from "./src/screens/visitantes/register"
import Proficionais from "./src/screens/clientes/listaproficional"
import Salao from "./src/Home"
import Icon from 'react-native-vector-icons/FontAwesome5'
import Agendamento from "./src/screens/clientes/agendamento"
import MeusAgendamentos from "./src/screens/clientes/meusAgendamentos"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MinhaConta from "./src/screens/accounts/accounts"
import { AuthContext, AuthProvider } from "./src/context/AuthContext"
import Splash from "./src/screens/visitantes/splash"
import listadeUsuarios from "./src/screens/administrador/listadeUsuarios"
import VerProfissionals from "./src/screens/clientes/verprofissional"
import ListaServicos from "./src/screens/administrador/Lista_Servicos"
import AdicionarServicos from "./src/screens/administrador/servicos/adicionarServicos"
import informacaoServico from "./src/screens/administrador/servicos/informacaoServico"
import AddProfissional from "./src/screens/administrador/profissional/addProfissional"
import AdminVerProfissional from "./src/screens/administrador/profissional/verProfissional"
import MeusAgendamentosProfissional from "./src/screens/profissional/meusAgendamentos"
import todosAgendamentos from "./src/screens/administrador/agendamentos/todosAgendamentos"
import AdicionarServicoProfissional from "./src/screens/administrador/profissional/AddServicoProfissional"
import InformacaoServicoClientes from "./src/screens/clientes/informacaoServico"




const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName
          if (route.name === 'inicio') iconName = 'home'
          else if (route.name === 'conta') iconName = 'user'
          else if (route.name === 'ver profissional') iconName = 'search'
          else if (route.name === 'agendamentos') iconName = 'calendar'
          return <Icon name={iconName} size={size} color={color} />

        },

        tabBarActiveTintColor: '#fbde89',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="inicio" component={Salao} options={{ headerShown: false }} />
      <Tab.Screen name="ver profissional" options={{ headerShown: false }} component={Proficionais} />
      <Tab.Screen name="agendamentos" options={{ headerShown: true, title: 'agendamentos', headerStyle: { elevation: 0, shadowOpacity: 0 } }} component={MeusAgendamentos} />
      <Tab.Screen name="conta" options={{ headerShown: false, title: 'conta', headerStyle: { elevation: 0, shadowOpacity: 0 } }} component={MinhaConta} />
    </Tab.Navigator>
  )
}



const Stack = createStackNavigator()


const AppNavigator = () => {

  const { isAuthenticated } = useContext(AuthContext)


  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName={"Splash"}>
        <Stack.Screen name="Splash" options={{ headerShown: false }} component={Splash} />
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
        <Stack.Screen name="Register" options={{ headerShown: false }} component={Register} />
        <Stack.Screen name="DoAgendamento" options={{ headerShown: true, title: '', headerStyle: { elevation: 0, shadowOpacity: 0 } }} component={Agendamento} />
        <Stack.Screen name="MeusAgendamentosProfissional" options={{ headerShown: true, title: 'Agendamentos com clientes', headerStyle: { elevation: 0, shadowOpacity: 0 } }} component={MeusAgendamentosProfissional} />
        <Stack.Screen name="Home" options={{ headerShown: false }} component={TabNavigator} />
        <Stack.Screen name="verProfissional" options={{ headerShown: false }} component={VerProfissionals} />
        <Stack.Screen name="AdminVerProfissional" options={{ headerShown: false }} component={AdminVerProfissional} />
        <Stack.Screen name="listadeUsuarios" options={{ title: 'Usuarios', headerStyle: { elevation: 0, shadowOpacity: 0 } }} component={listadeUsuarios} />
        <Stack.Screen name="listaServicos" options={{ title: 'Servicos do Salão', headerStyle: { elevation: 0, shadowOpacity: 0 } }} component={ListaServicos} />
        <Stack.Screen name="AdicionarServicos" options={{ title: 'Servicos do Salão', headerStyle: { elevation: 0, shadowOpacity: 0 } }} component={AdicionarServicos} />
        <Stack.Screen name="InformaçãoServico" options={{ title: 'Lista de Serviços', headerStyle: { elevation: 0, shadowOpacity: 0 } }} component={informacaoServico} />
        <Stack.Screen name="verServico" options={{ title: 'Informacao do servico', headerStyle: { elevation: 0, shadowOpacity: 0 } }} component={InformacaoServicoClientes} />
        <Stack.Screen name="agendamentosAdmin" options={{ title: 'Todos os agendamentos do salão', headerStyle: { elevation: 0, shadowOpacity: 0 } }} component={todosAgendamentos} />
        <Stack.Screen name="AddProfissional" options={{ headerShown: false }} component={AddProfissional} />
         <Stack.Screen name="AddServicoProfissional" options={{ headerShown: false }} component={AdicionarServicoProfissional} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const App = () => {

  return (
    <AuthProvider >
      <AppNavigator />
    </AuthProvider>
  )
}

export default App