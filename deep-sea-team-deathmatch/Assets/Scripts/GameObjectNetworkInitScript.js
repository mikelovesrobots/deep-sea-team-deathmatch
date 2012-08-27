#pragma strict

function OnNetworkInstantiate (msg : NetworkMessageInfo) {
  // This is our own player
  if (networkView.isMine) {
    GetComponent(NetworkRigidbody).enabled = false;
  } else {
    // This is just some remote controlled player, don't execute direct
    // user input on this
    name += "Remote";
    GetComponent(NetworkRigidbody).enabled = true;
  }
}
