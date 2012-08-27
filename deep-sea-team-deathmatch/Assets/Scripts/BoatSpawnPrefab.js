public var playerPrefab : Transform;
public var gunPrefab : Transform;

function OnNetworkLoadedLevel()
{
  Debug.Log("BoatSpawnPrefab#OnNetworkLoadedLevel");
  Spawn(playerPrefab);
  var times : int = Random.Range(1,100);
  for(var i : int = 0; i < times; i++) {
    Spawn(gunPrefab);
  }
}

function Spawn(prefab : Transform) {
  // Randomize starting location
  var pos : Vector3;
  pos.x = 20*Random.value;
  pos.y = 0;
  pos.z = 20*Random.value;
  Network.Instantiate(prefab, pos, transform.rotation, 0);
}

function OnPlayerDisconnected (player : NetworkPlayer)
{
  Debug.Log("Server destroying player");
  Network.RemoveRPCs(player, 0);
  Network.DestroyPlayerObjects(player);
}

