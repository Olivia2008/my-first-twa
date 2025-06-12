import './App.css';
import { TonConnectButton } from '@tonconnect/ui-react';
import { useTonConnect } from './hooks/useTonConnect';
import { useCounterContract } from './hooks/useCounterContract';
import WebApp from "@twa-dev/sdk";
// import { MainButton, SecondaryButton, BottomBar } from "@twa-dev/sdk/react";
// import { useEffect, useState } from 'react';


function App() {
  const { connected } = useTonConnect();
  const { value, address, sendIncrement } = useCounterContract();
  // const [state, setState] = useState<"default" | "tinder" | "monochrome">(
  //   "default"
  // );
const MainButton = WebApp.MainButton;

MainButton.setText('Submit');
MainButton.show();
MainButton.onClick(() => alert('submitted'));
  // useEffect(() => {
  //   if (state === "monochrome") {
  //     WebApp.setBackgroundColor("#000");
  //     WebApp.setHeaderColor("#000");
  //   } else {
  //     WebApp.setBackgroundColor("bg_color");
  //     WebApp.setHeaderColor("bg_color");
  //   }
  // }, [state]);

  // switch (state) {
  //   case "default":
  //     return (
  //       <BottomBar>
  //         <MainButton text="Continue" onClick={() => setState("tinder")} />
  //       </BottomBar>
  //     );
  //   case "tinder":
  //     return (
  //       <BottomBar bgColor="#fff">
  //         <MainButton
  //           text="Continue"
  //           onClick={() => setState("monochrome")}
  //           color="#ef4a75"
  //           textColor="#fff"
  //           hasShineEffect
  //         />
  //         <SecondaryButton
  //           text="Back"
  //           color="#fff"
  //           textColor="#424242"
  //           position="left"
  //           onClick={() => setState("default")}
  //         />
  //       </BottomBar>
  //     );
  //   case "monochrome":
  //     return (
  //       <BottomBar bgColor="#000">
  //         <MainButton
  //           text="Close"
  //           onClick={() => WebApp.close()}
  //           color="#fff"
  //           textColor="#000"
  //           hasShineEffect
  //         />
  //         <SecondaryButton
  //           text="Back"
  //           color="#000"
  //           textColor="#fff"
  //           position="bottom"
  //           onClick={() => setState("tinder")}
  //         />
  //       </BottomBar>
  //     );
  // }

  return (
    <div className='App'>
      <div className='Container'>
        <TonConnectButton />

        <div className='Card' onClick={()=>{
          navigator.clipboard.writeText(address??'').then(()=>{alert('copy completely')})
        }}>
          <b>Counter Address</b>
          <div className='Hint'>{address?.slice(0, 20) + '...'}</div>
        </div>

        <div className='Card'>
          <b>Counter Value</b>
          <div>{value ?? 'Loading...'}</div>
        </div>

        <a
          className={`Button ${connected ? 'Active' : 'Disabled'}`}
          onClick={() => {
            sendIncrement();
          }}
        >
          Increment
        </a>
      </div>
    </div>
  );
}

export default App
