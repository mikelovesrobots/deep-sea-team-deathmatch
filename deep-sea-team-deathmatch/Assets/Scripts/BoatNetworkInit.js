#pragma strict

function OnNetworkInstantiate (msg : NetworkMessageInfo) {
  // This is our own player
  if (networkView.isMine) {
    Camera.main.GetComponent(SmoothFollow).target = transform;
    //gameObject.AddComponent(NetworkSerializationLocal);
  } else {
    // This is just some remote controlled player, don't execute direct
    // user input on this
    name += "Remote";
    GetComponent(BoatControlScript).enabled = false;
    //gameObject.AddComponent(NetworkSerializationRemote);
  }
}
