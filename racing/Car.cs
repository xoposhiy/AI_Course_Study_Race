using System;
using AiAlgorithms.Algorithms;

namespace AiAlgorithms.racing
{
    public class Car : Disk
    {
        public Car(V pos, V v, int radius)
            : base(pos, radius)
        {
            V = v;
            IsAlive = true;
        }

        public V V { get; set; }
        public bool IsAlive { get; set; }
        public int FlagsTaken { get; set; }
        public V NextCommand { get; set; }

        public void Tick()
        {
            V = V + new V(Math.Sign(NextCommand.X), Math.Sign(NextCommand.Y));
            Pos = Pos + V;
        }

        public static Car ParseCar(string s)
        {
            var parts = s.Split(new []{' '});
            return new Car(V.Parse(parts[0]), V.Parse(parts[1]), int.Parse(parts[2]));
        }

        public override string ToString()
        {
            return $"Pos: {Pos}, V: {V}, IsAlive: {IsAlive}, FlagsTaken: {FlagsTaken}, NextCommand: {NextCommand}";
        }

        public Car MakeCopy()
        {
            return new Car(Pos, V, Radius) {FlagsTaken = FlagsTaken};
        }
    }
}