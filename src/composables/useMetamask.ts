import {ref, onMounted} from 'vue'
export default function useMetamask()
{
    const isLoggedIn = ref<boolean>(false)
    const address = ref<string>("")
    
    onMounted(() => {
        if(!isMetamaskSupported())
        {
            return "Metamask not supported"
        }
       

        (window as any).ethereum.on('accountsChanged', async () => {
            getAddressOnLogin()
        })

        getAddressOnLogin()
    })


    function isMetamaskSupported() : Boolean {
        return typeof (window as any).ethereum !== "undefined"
    }


    async function connectWallet() : Promise<void> {
        const accounts = await (window as any).ethereum.request({ method: "eth_requestAccounts" });
        address.value = accounts[0]
        isLoggedIn.value =  address.value ? true : false
    }

    async function getAddressOnLogin() : Promise<void>
    {
        address.value = await (window as any).ethereum.request({method: 'eth_accounts'})
        isLoggedIn.value = address.value && address.value[0] ? true : false
    }

    return {
        isLoggedIn, address, connectWallet, isMetamaskSupported
    }
}