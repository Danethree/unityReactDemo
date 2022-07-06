using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
public class GameManager : MonoBehaviour
{
    public static GameManager instance;
    public int points;
    public Text pointsTxt;

    private void Awake()
    {
        if(instance = null)
        {
            instance = this;
        }
        else
        {
            Destroy(instance);
        }
    }
    void Start()
    {
        points = 0;
        pointsTxt.text = points.ToString();
    }

 
    void Update()
    {
        
    }
    public void setPoints()
    {
        points += 1;
        pointsTxt.text = points.ToString();
    }
}
